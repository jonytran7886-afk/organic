export interface Product {
  id: string;
  name: string;
  category: 'trung' | 'thit' | 'nongsan' | 'chebien';
  catName: string;
  image: string;
  badge: string;
  intro: string;
  points: string[];
  application: string;
}

export interface Article {
  id: string;
  tag: string;
  title: string;
  image: string;
  description: string;
  sections: [string, string][];
}

export interface ContactDraft {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
  consent?: string;
  createdAt: string;
}
