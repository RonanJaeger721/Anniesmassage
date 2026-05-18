export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Facial {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  treatments: string[];
  image?: string;
  isSpecial?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  category: 'Couple' | 'Waxing' | 'Massage' | 'Pedicure' | 'Facial';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}
