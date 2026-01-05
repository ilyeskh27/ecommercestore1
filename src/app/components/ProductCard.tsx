import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: string) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.color[0], 1);
  };

  return (
    <div
      onClick={() => onProductClick(product.id)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] mb-3 bg-neutral-100 overflow-hidden">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="bg-[#C77D6A] text-white text-xs px-3 py-1">
              SALE
            </span>
          )}
          {product.bestseller && (
            <span className="bg-white text-neutral-900 text-xs px-3 py-1">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${inWishlist ? 'fill-[#C77D6A] text-[#C77D6A]' : 'text-neutral-900'}`}
            />
          </button>
          <button
            onClick={handleQuickAdd}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-neutral-900" />
          </button>
        </div>

        {/* Quick view on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:block hidden">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white py-2 hover:bg-neutral-100 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-neutral-900 group-hover:text-[#C77D6A] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500">{product.color.join(', ')}</p>
        <div className="flex items-center gap-2">
          <span className="text-neutral-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-neutral-400 line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
