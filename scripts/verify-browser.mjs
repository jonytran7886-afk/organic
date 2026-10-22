import fs from 'node:fs';
const origin='http://127.0.0.1:8080/';
const target=await (await fetch('http://127.0.0.1:9222/json/new?'+origin,{method:'PUT'})).json();
const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map(),errors=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text+': '+m.params.exceptionDetails.exception?.description);});
const cdp=(method,params={})=>new Promise((resolve,reject)=>{const i=++id;pending.set(i,{resolve,reject});ws.send(JSON.stringify({id:i,method,params}));});
const ev=async expression=>{const r=await cdp('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||expression);return r.result.value;};
const delay=t=>new Promise(r=>setTimeout(r,t));
const check=(value,message)=>{if(!value)throw Error(message);};
await cdp('Runtime.enable');await cdp('Page.enable');
async function go(path){await cdp('Page.navigate',{url:origin+path});for(let n=0;n<100;n++){await delay(50);if(await ev(`location.href===${JSON.stringify(new URL(origin+path).href)} && document.readyState==='complete'`))return;}throw Error('Load timeout '+path);}
const pages=fs.readdirSync('.').filter(n=>n.endsWith('.html'));
const summary={pages:[],products:[],articles:[],interactions:[],errors};
fs.mkdirSync('/private/tmp/ov-review',{recursive:true});
for(const width of [1440,768,390,320]){
 await cdp('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<768});
 for(const page of pages){
  await go(page);
  const result=await ev(`(async()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));return {title:document.title,description:document.querySelector('meta[name=description]').content,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),old:/hữu cơ/i.test(document.documentElement.outerHTML),unapproved:[...document.body.innerText.matchAll(/organic(?! việt nam)/ig)].map(m=>m[0]),brand:document.querySelector('.brand strong').textContent};})()`);
  check(!result.overflow,`${page} overflows at ${width}`);check(!result.broken.length,`${page} broken images ${result.broken}`);check(!result.old,`${page} old positioning`);check(!result.unapproved.length,`${page} unapproved organic`);check(result.brand==='ORGANIC VIỆT NAM','Brand changed');
  if(width<=768){await ev(`document.querySelector('#menuToggle').click()`);check(await ev(`document.querySelector('#menuToggle').getAttribute('aria-expanded')==='true' && getComputedStyle(document.querySelector('#mobileNav')).display!=='none'`),'Mobile menu');await ev(`document.querySelector('#menuToggle').click()`);}
  if(width===1440||width===390){const shot=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(`/private/tmp/ov-review/${page}-${width}.png`,Buffer.from(shot.data,'base64'));}
  summary.pages.push({page,width,...result});
 }
}
await cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await go('san-pham.html');const data=await ev('OV_DATA');
for(const category of ['all','trung','thit','nongsan','chebien']){
 await go('san-pham.html'+(category==='all'?'':'?loai='+category));
 const expected=data.products.filter(p=>category==='all'||p.category===category).length;
 check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===expected,'URL filter '+category);
 await ev(`document.querySelector('[data-filter="thit"]').click()`);check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===3,'Filter button');
 summary.interactions.push('Filter URL '+category+' and button passed');
}
await go('san-pham.html?q=thảo%20dược');check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===3,'Herbal search');
await ev(`document.querySelector('#productSearch').value='không-có-sản-phẩm';document.querySelector('#productSearch').dispatchEvent(new Event('input'))`);check(await ev(`!document.querySelector('#emptyResults').hidden && !document.querySelectorAll('#productGrid .product-card').length`),'Empty results');
await ev(`document.querySelector('#resetFilters').click()`);check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===8,'Reset filters');
await go('index.html');await ev(`localStorage.removeItem('ov_interests');document.querySelector('[data-save="thao-moc"]').click()`);await go('quan-tam.html');check(await ev(`document.querySelectorAll('#savedGrid .product-card').length===1 && document.querySelector('#savedGrid').innerText.includes('Thảo dược & nguyên liệu')`),'Saved product');await ev(`document.querySelector('[data-save="thao-moc"]').click()`);await delay(100);check(await ev(`!document.querySelector('#savedEmpty').hidden`),'Unsave');
await go('san-pham.html');await ev(`document.querySelector('[data-save="trung-ga"]').click()`);await go('quan-tam.html');await ev(`document.querySelector('#clearSaved').click()`);check(await ev(`!document.querySelector('#savedEmpty').hidden && JSON.parse(localStorage.getItem('ov_interests')).length===0`),'Clear saved');
summary.interactions.push('Search, empty state, reset, save persistence, unsave, clear passed');
for(const width of [1440,390]){
await cdp('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<768});
for(const p of data.products){await go('chi-tiet-san-pham.html?id='+p.id);check(await ev(`document.querySelector('#productDetail h2').textContent===${JSON.stringify(p.name)} && document.title.startsWith(${JSON.stringify(p.name)}) && document.querySelector('meta[name=description]').content.includes(${JSON.stringify(p.verification)}) && document.querySelector('#productDetail').innerText.includes(${JSON.stringify(p.verification)})`),'Product data '+p.id);check(await ev(`document.querySelector('#productDetail a[href^="lien-he"]').href.includes('san-pham=${p.id}')`),'Product contact link');check(await ev('document.documentElement.scrollWidth<=innerWidth'),'Product overflow '+p.id+' '+width);summary.products.push({id:p.id,width});}
for(const a of data.articles){await go('bai-viet.html?id='+a.id);check(await ev(`document.querySelector('#articleDetail h2').textContent===${JSON.stringify(a.title)} && document.querySelector('meta[name=description]').content===${JSON.stringify(a.description)}`),'Article '+a.id);check(await ev('document.documentElement.scrollWidth<=innerWidth'),'Article overflow '+a.id+' '+width);summary.articles.push({id:a.id,width});}
}
await go('index.html');await ev(`(()=>{const f=document.querySelector('.header-search');f.querySelector('input').value='thảo dược';f.requestSubmit()})()`);for(let n=0;n<100;n++){await delay(50);if(await ev(`location.pathname.endsWith('/san-pham.html') && document.querySelectorAll('#productGrid .product-card').length===3`))break;if(n===99)throw Error('Header search navigation');}
summary.interactions.push('Header search navigation passed');
await go('lien-he.html?chu-de=T%C3%ACm%20hi%E1%BB%83u%20s%E1%BA%A3n%20ph%E1%BA%A9m&san-pham=thao-moc');check(await ev(`document.querySelector('[name=message]').value.includes('Thảo dược & nguyên liệu') && document.querySelector('[name=subject]').value==='Tìm hiểu sản phẩm'`),'Contact prefill');
await ev(`(()=>{const f=document.querySelector('#contactForm');for(const i of f.querySelectorAll('input')){if(i.type==='checkbox')i.checked=true;else if(i.type==='email')i.value='review@example.com';else if(i.type==='tel')i.value='0901234567';else i.value='Kiểm tra website';}f.requestSubmit()})()`);check(await ev(`!document.querySelector('#contactResult').hidden && document.querySelector('#contactResult').innerText.includes('chưa được gửi') && JSON.parse(localStorage.getItem('ov_contact_drafts')).length>0`),'Contact draft');summary.interactions.push('All details, articles, contact prefill and local draft passed');
check(!errors.length,JSON.stringify(errors));
fs.writeFileSync('/private/tmp/ov-review/results.json',JSON.stringify(summary,null,2));console.log(JSON.stringify({pageViewports:summary.pages.length,products:summary.products.length,articles:summary.articles.length,interactions:summary.interactions,errors}));await cdp('Page.close');ws.close();
