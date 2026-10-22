import fs from 'node:fs';
const origin='http://127.0.0.1:3000/';
const source=fs.readFileSync('src/data.ts','utf8');
const products=JSON.parse(source.split('export const PRODUCTS: Product[] = ')[1].split(';\n\nexport const ARTICLES: Article[] = ')[0]);
const articles=JSON.parse(source.split('export const ARTICLES: Article[] = ')[1].replace(/;\n$/,''));
const target=await (await fetch('http://127.0.0.1:9222/json/new?'+origin,{method:'PUT'})).json();
const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map(),errors=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text+': '+m.params.exceptionDetails.exception?.description);});
const cdp=(method,params={})=>new Promise((resolve,reject)=>{const i=++id;pending.set(i,{resolve,reject});ws.send(JSON.stringify({id:i,method,params}));});
const ev=async expression=>{const r=await cdp('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||expression);return r.result.value;};
const delay=t=>new Promise(r=>setTimeout(r,t));
const check=(value,message)=>{if(!value)throw Error(message);};
async function wait(expression,message){for(let i=0;i<100;i++){if(await ev(expression))return;await delay(50);}throw Error(message);}
async function click(selector){await ev(`document.querySelector(${JSON.stringify(selector)}).click()`);await delay(80);}
async function input(selector,value){await ev(`(()=>{const el=document.querySelector(${JSON.stringify(selector)});Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),'value').set.call(el,${JSON.stringify(value)});el.dispatchEvent(new Event('input',{bubbles:true}));})()`);await delay(80);}
await cdp('Runtime.enable');await cdp('Page.enable');
async function go(path){await cdp('Page.navigate',{url:origin+path});await wait(`location.href===${JSON.stringify(new URL(origin+path).href)} && document.readyState==='complete' && !!document.querySelector('main h1')`,'Load '+path);await delay(80);}
const pages=['','san-pham','chi-tiet-san-pham','ve-chung-toi','trang-trai','chat-luong','tin-tuc','bai-viet','quan-tam','lien-he'];
const summary={pages:[],products:[],articles:[],interactions:[],errors};
fs.mkdirSync('/private/tmp/ov-review',{recursive:true});
for(const width of [1440,768,390,320]){
 await cdp('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<768});
 for(const page of pages){
  await go(page);
  const result=await ev(`(async()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));return {title:document.title,description:document.querySelector('meta[name=description]').content,overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),old:/hữu cơ/i.test(document.documentElement.outerHTML),unapproved:[...document.body.innerText.matchAll(/organic(?! việt nam)/ig)].map(m=>m[0]),brand:document.querySelector('.brand strong').textContent};})()`);
  check(!result.overflow,`${page} overflows at ${width}`);check(!result.broken.length,`${page} broken images ${result.broken}`);check(!result.old,`${page} old positioning`);check(!result.unapproved.length,`${page} unapproved organic`);check(result.brand==='ORGANIC VIỆT NAM','Brand changed');
  if(width<=768){await click('.menu-button');check(await ev(`document.querySelector('.menu-button').getAttribute('aria-expanded')==='true' && getComputedStyle(document.querySelector('.mobile-nav')).display!=='none'`),'Mobile menu');await click('.menu-button');}
  if(width===1440||width===390){const shot=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(`/private/tmp/ov-review/${page||'index'}-${width}.png`,Buffer.from(shot.data,'base64'));}
  summary.pages.push({page,width,...result});
 }
}
for(const page of pages){await go((page||'index')+'.html');check(await ev('!!document.querySelector("main h1")'),'HTML alias '+page);}
summary.interactions.push('10 legacy HTML URL aliases passed');
await cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
for(const category of ['all','trung','thit','nongsan','chebien']){
 await go('san-pham'+(category==='all'?'':'?loai='+category));
 check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===products.filter(p=>category==='all'||p.category===category).length,'URL filter '+category);
 await click('.filter-pill:nth-child(3)');check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===3,'Filter button');
}
await go('san-pham?q=thảo%20dược');check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===3,'Herbal search');
await input('#productSearch','không-có-sản-phẩm');check(await ev(`!!document.querySelector('#emptyResults') && !document.querySelectorAll('#productGrid .product-card').length`),'Empty results');
await click('#resetFilters');check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===8,'Reset filters');
await input('#productSearch','gà');await input('#productSearch','');check(await ev(`document.querySelectorAll('#productGrid .product-card').length`)===8,'Clear search');
await go('');await ev(`localStorage.removeItem('ov_interests')`);await go('');await click('.featured-section .product-card:first-child .save-btn');await go('quan-tam');check(await ev(`document.querySelectorAll('#savedGrid .product-card').length===1 && document.querySelector('#savedGrid').innerText.includes('Thảo dược & nguyên liệu')`),'Saved product');await click('#savedGrid .save-btn');check(await ev(`!!document.querySelector('#savedEmpty')`),'Unsave');
await go('san-pham');await click('#productGrid .save-btn');await go('quan-tam');await click('#clearSaved');check(await ev(`!!document.querySelector('#savedEmpty') && JSON.parse(localStorage.getItem('ov_interests')).length===0`),'Clear saved');
summary.interactions.push('URL/button filters, search, empty/reset/clear, save persistence, unsave and clear passed');
for(const width of [1440,390]){
 await cdp('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<768});
 for(const p of products){await go('chi-tiet-san-pham?id='+p.id);check(await ev(`document.querySelector('#productDetail h2').textContent===${JSON.stringify(p.name)} && document.title.startsWith(${JSON.stringify(p.name)}) && document.querySelector('meta[name=description]').content.includes(${JSON.stringify(p.verification)}) && document.querySelector('#productDetail').innerText.includes(${JSON.stringify(p.verification)})`),'Product data '+p.id);check(await ev(`document.querySelector('#productDetail a[href^="/lien-he"]').href.includes('san-pham=${p.id}')`),'Product contact link');check(await ev('document.documentElement.scrollWidth<=innerWidth'),'Product overflow '+p.id+' '+width);summary.products.push({id:p.id,width});}
 for(const a of articles){await go('bai-viet?id='+a.id);check(await ev(`document.querySelector('#articleDetail h2').textContent===${JSON.stringify(a.title)} && document.querySelector('meta[name=description]').content===${JSON.stringify(a.description)}`),'Article '+a.id);check(await ev('document.documentElement.scrollWidth<=innerWidth'),'Article overflow '+a.id+' '+width);summary.articles.push({id:a.id,width});}
}
await go('');await input('.header-search input','thảo dược');await ev(`document.querySelector('.header-search').requestSubmit()`);await wait(`location.pathname==='/san-pham' && document.querySelectorAll('#productGrid .product-card').length===3`,'Header search navigation');
await go('lien-he?chu-de=T%C3%ACm%20hi%E1%BB%83u%20s%E1%BA%A3n%20ph%E1%BA%A9m&san-pham=thao-moc');check(await ev(`document.querySelector('[name=message]').value.includes('Thảo dược & nguyên liệu') && document.querySelector('[name=subject]').value==='Tìm hiểu sản phẩm'`),'Contact prefill');
await input('[name=name]','Kiểm tra website');await input('[name=phone]','0901234567');await input('[name=email]','review@example.com');await click('[name=consent]');await click('#contactForm button[type=submit]');check(await ev(`!!document.querySelector('#contactResult') && document.querySelector('#contactResult').innerText.includes('chưa được gửi') && JSON.parse(localStorage.getItem('ov_contact_drafts')).length>0`),'Contact draft');
summary.interactions.push('All details/articles desktop-mobile, header search, contact prefill and local draft passed');
check(!errors.length,JSON.stringify(errors));
fs.writeFileSync('/private/tmp/ov-review/results.json',JSON.stringify(summary,null,2));console.log(JSON.stringify({pageViewports:summary.pages.length,products:summary.products.length,articles:summary.articles.length,interactions:summary.interactions,errors}));await cdp('Page.close');ws.close();
