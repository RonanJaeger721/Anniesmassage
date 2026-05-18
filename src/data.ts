import { Service, Facial, Package, Promotion, Testimonial, GalleryImage } from './types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'full-body',
    name: 'Full Body Massage',
    description: 'A comprehensive massage targeting all major muscle groups to release tension and improve circulation.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swedish',
    name: 'Swedish Massage',
    description: 'Gentle, long strokes to relax the entire body and increase level of oxygen in the blood.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Focuses on realigning deeper layers of muscles and connective tissue.',
    icon: 'Fingerprint',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hotstone',
    name: 'Hotstone Therapy',
    description: 'Uses smooth, heated stones to melt away tension and promote deep relaxation.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy',
    description: 'Combines massage with essential oils to promote healing and a sense of well-being.',
    icon: 'Flower2',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'reflexology',
    name: 'Reflexology',
    description: 'Pressure applied to specific points on the feet to promote health in related body parts.',
    icon: 'Footprints',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81eb233c?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_FACIALS: Facial[] = [
  {
    id: 'hydrating',
    name: 'Hydrating Facial',
    price: 10,
    description: 'Ideal for dry skin. It boosts moisture giving your skin a supple refreshed look.',
    benefits: ['Supple skin', 'Moisture boost', 'Refreshed look']
  },
  {
    id: 'deep-cleanse',
    name: 'Deep Cleanse',
    price: 12,
    description: 'Ideal for seborrheic, acne prone skin. Deeply cleans your skin, removing dead skin, black/white heads.',
    benefits: ['Deep cleaning', 'Remove blackheads', 'Prevents breakouts']
  },
  {
    id: 'glow',
    name: 'Glow Facial',
    price: 15,
    description: 'Ideal for dull looking skin. It brightens skin, giving it a glow boost.',
    benefits: ['Brighten skin', 'Glow boost', 'Radiant complexion']
  },
  {
    id: 'micro-needling',
    name: 'Micro Needling',
    price: 20,
    description: 'Ideal for hyperpigmentation, dark spots and wrinkles. Increases collagen production.',
    benefits: ['Collagen boost', 'Reduce dark spots', 'Youthful look']
  }
];

export const INITIAL_PACKAGES: Package[] = [
  {
    id: 'queen-king',
    name: 'Queen/King Package',
    price: 95,
    treatments: ['Hotstone Full Body Massage', 'Luxury Pedicure', 'Glow Facial', 'Back Scrub', 'Cake Plus Bottle of Wine'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'princess-prince',
    name: 'Princess/Prince Package',
    price: 60,
    treatments: ['Fullbody Massage', 'Deluxe Pedicure', 'Deep Cleanse Facial', 'Small Cake With 6 Cupcakes'],
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'birthday',
    name: 'Happy Birthday Package',
    price: 45,
    treatments: ['Back, Shoulder & Neck Massage', 'Essential Pedicure', 'Hydrating Facial', 'Small Cake & 6 Cupcakes'],
    image: 'https://images.unsplash.com/photo-1530101121243-cff41107c3f1?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_PROMOTIONS: Promotion[] = [
  {
    id: 'couple-wax',
    title: 'Under-Arm Wax For 2',
    description: 'Perfect for friends or partners.',
    price: '$8',
    category: 'Waxing',
    image: 'https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'couple-massage',
    title: 'Aromatherapy Massage For 2',
    description: 'Everything is better together.',
    price: '$35',
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sandra M.', text: 'The most relaxing experience I’ve had in Bulawayo. Professional and calming atmosphere.', rating: 5 },
  { id: '2', name: 'John D.', text: 'Amazing Swedish massage. Professional staff and very clean environment.', rating: 5 },
  { id: '3', name: 'Tariro N.', text: 'My stress disappeared instantly. The Glow Facial really works wonders!', rating: 5 }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&q=80&w=800', alt: 'Massage treatment', category: 'Massage' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1512290923902-8a9f81eb233c?auto=format&fit=crop&q=80&w=800', alt: 'Spa pedicure', category: 'Pedicure' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800', alt: 'Relaxing environment', category: 'Spa' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800', alt: 'Facial treatment', category: 'Facial' }
];
