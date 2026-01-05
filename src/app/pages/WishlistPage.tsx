import { Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';

interface WishlistPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export function WishlistPage({ onNavigate }: WishlistPageProps) {
  const { wishlistItems } = useStore();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-neutral-400" />
          </div>
          <h2 className="mb-3">Your wishlist is empty</h2>
          <p className="text-neutral-600 mb-8">
            Save your favorite items to your wishlist so you can easily find them later.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-800 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <h1 className="mb-8">My Wishlist ({wishlistItems.length})</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {wishlistItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={(id) => onNavigate('product', id)}
          />
        ))}
      </div>
    </div>
  );
}
