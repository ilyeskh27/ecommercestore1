export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  color: string[];
  sizes: string[];
  images: string[];
  description: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimal Oversized Blazer',
    price: 189,
    originalPrice: 249,
    category: 'outerwear',
    color: ['Beige', 'Black', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NzYwOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1663475986058-a4a06c5f9b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBuZXV0cmFsfGVufDF8fHx8MTc2NzYwOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'A timeless oversized blazer crafted from premium wool blend. Perfect for layering over any outfit, featuring a relaxed fit and structured shoulders.',
    rating: 4.8,
    reviews: 156,
    featured: true,
    bestseller: true,
  },
  {
    id: '2',
    name: 'Linen Button-Down Shirt',
    price: 89,
    category: 'tops',
    color: ['Beige', 'White', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xvdGhpbmclMjBiZWlnZXxlbnwxfHx8fDE3Njc2MDk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Breathable linen shirt with a classic collar and mother-of-pearl buttons. Designed for all-day comfort with a relaxed, modern silhouette.',
    rating: 4.6,
    reviews: 89,
    featured: true,
  },
  {
    id: '3',
    name: 'Tailored Wool Trousers',
    price: 129,
    category: 'bottoms',
    color: ['Black', 'Charcoal', 'Camel'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1753029226995-74b05a344bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbG90aGluZyUyMHN0b3JlfGVufDF8fHx8MTc2NzU0NTk1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'High-waisted tailored trousers with a flattering straight-leg cut. Made from premium wool blend for a polished, sophisticated look.',
    rating: 4.7,
    reviews: 124,
    bestseller: true,
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    price: 199,
    category: 'accessories',
    color: ['Tan', 'Black', 'Cognac'],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1601281866896-1576541e77a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzUxODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Handcrafted Italian leather crossbody bag with adjustable strap. Minimalist design with premium hardware and spacious interior.',
    rating: 4.9,
    reviews: 203,
    featured: true,
    bestseller: true,
  },
  {
    id: '5',
    name: 'Oversized Denim Jacket',
    price: 149,
    category: 'outerwear',
    color: ['Light Blue', 'Black', 'Vintage Wash'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1762343935300-4828111fee03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBqYWNrZXQlMjBjbG90aGluZ3xlbnwxfHx8fDE3Njc2MDk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Classic oversized denim jacket with a modern twist. Features distressed detailing and comfortable cotton blend fabric.',
    rating: 4.5,
    reviews: 78,
  },
  {
    id: '6',
    name: 'Wide-Leg Denim Jeans',
    price: 119,
    category: 'bottoms',
    color: ['Blue', 'Black', 'White'],
    sizes: ['24', '25', '26', '27', '28', '29', '30'],
    images: [
      'https://images.unsplash.com/photo-1639602182178-2dc689354103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBkZW5pbSUyMG91dGZpdHxlbnwxfHx8fDE3Njc2MDk0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Effortlessly chic wide-leg jeans with a high waist and relaxed fit. Made from premium denim with just the right amount of stretch.',
    rating: 4.6,
    reviews: 142,
    bestseller: true,
  },
  {
    id: '7',
    name: 'Silk Slip Dress',
    price: 179,
    category: 'dresses',
    color: ['Black', 'Champagne', 'Emerald'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1761574028262-6d834741bfd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzU5MDA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Luxurious silk slip dress with delicate spaghetti straps. Perfect for special occasions or elevated everyday wear.',
    rating: 4.8,
    reviews: 98,
    featured: true,
  },
  {
    id: '8',
    name: 'Cashmere Crewneck Sweater',
    price: 229,
    originalPrice: 299,
    category: 'tops',
    color: ['Cream', 'Gray', 'Navy', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NzYwOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Ultra-soft 100% cashmere sweater with a classic crewneck design. A wardrobe essential that gets softer with every wear.',
    rating: 4.9,
    reviews: 167,
    bestseller: true,
  },
];

export const categories = [
  { id: 'all', name: 'All', count: products.length },
  { id: 'tops', name: 'Tops', count: products.filter(p => p.category === 'tops').length },
  { id: 'bottoms', name: 'Bottoms', count: products.filter(p => p.category === 'bottoms').length },
  { id: 'outerwear', name: 'Outerwear', count: products.filter(p => p.category === 'outerwear').length },
  { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
];

export const reviews = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-12-15',
    content: 'Absolutely love this piece! The quality is exceptional and the fit is perfect. Worth every penny.',
    verified: true,
  },
  {
    id: '2',
    author: 'Emily R.',
    rating: 5,
    date: '2024-12-10',
    content: 'Beautiful craftsmanship and attention to detail. This has become a staple in my wardrobe.',
    verified: true,
  },
  {
    id: '3',
    author: 'Jessica K.',
    rating: 4,
    date: '2024-12-05',
    content: 'Great quality and fast shipping. Runs slightly large, so I\'d recommend sizing down.',
    verified: true,
  },
  {
    id: '4',
    author: 'Amanda L.',
    rating: 5,
    date: '2024-11-28',
    content: 'Exceeded my expectations! The fabric feels luxurious and the design is timeless.',
    verified: true,
  },
];