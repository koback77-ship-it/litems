import { Product, LookbookItem } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Oak Chair',
    price: 245000,
    category: 'Furniture',
    description: 'A timeless piece crafted from solid oak, designed for both comfort and aesthetic simplicity.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Handwoven Wool Rug',
    price: 158000,
    category: 'Textile',
    description: 'A soft, hand-tufted wool rug in a minimalist geometric pattern, adding warmth and texture to your floor.',
    image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Linen Pendant Light',
    price: 189000,
    category: 'Lighting',
    description: 'Soft, diffused lighting wrapped in natural linen, creating a warm atmosphere in any room.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
    isNew: true,
  },
  {
    id: '4',
    name: 'Wool Blend Throw',
    price: 72000,
    category: 'Textile',
    description: 'Extra soft wool blend throw in a neutral beige tone, ideal for cozy evenings.',
    image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Walnut Desk Organizer',
    price: 55000,
    category: 'Office',
    description: 'Keep your workspace tidy with this elegant walnut wood organizer.',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: '6',
    name: 'Stone Incense Holder',
    price: 32000,
    category: 'Decor',
    description: 'Minimalist stone holder for your favorite incense sticks, bringing peace to your space.',
    image: 'https://images.unsplash.com/photo-1602872030219-cbf917a8cbd3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Rattan Lounge Chair',
    price: 320000,
    category: 'Furniture',
    description: 'Hand-woven rattan chair that brings a touch of nature indoors.',
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Glass Coffee Carafe',
    price: 42000,
    category: 'Kitchen',
    description: 'Heat-resistant glass carafe for the perfect pour-over coffee experience.',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=800',
  }
];

export const lookbookItems: LookbookItem[] = [
  {
    id: 'l1',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
    author: '@minimal_home',
    location: 'Seoul, Korea',
    products: ['1', '3'],
  },
  {
    id: 'l2',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    author: '@lifestyle_curator',
    location: 'Tokyo, Japan',
    products: ['2', '6'],
  },
  {
    id: 'l3',
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
    author: '@cozy_nook',
    location: 'Copenhagen, Denmark',
    products: ['4', '7'],
  },
  {
    id: 'l4',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=800',
    author: '@design_daily',
    location: 'Berlin, Germany',
    products: ['5', '8'],
  }
];
