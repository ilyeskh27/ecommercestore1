import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProducts = products.filter((p) => p.featured);
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[85vh] bg-neutral-100">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NzYwOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h1 className="text-white text-4xl lg:text-6xl mb-4 tracking-tight">
                Timeless Elegance
              </h1>
              <p className="text-white/90 text-lg lg:text-xl mb-8">
                Discover our curated collection of premium fashion essentials
              </p>
              <button
                onClick={() => onNavigate('shop')}
                className="bg-white text-neutral-900 px-8 py-4 hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 group"
              >
                Shop Collection
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="mb-3">Featured Collections</h2>
          <p className="text-neutral-600">Handpicked styles for the modern wardrobe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => onNavigate('shop')}
            className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwY2xvdGhpbmclMjBiZWlnZXxlbnwxfHx8fDE3Njc2MDk0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Women"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="text-white">
                <h3 className="mb-2">Women</h3>
                <p className="text-white/90 mb-4">Effortless sophistication</p>
                <span className="inline-flex items-center gap-2 border-b border-white pb-1">
                  Shop Now <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('shop')}
            className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1663475986058-a4a06c5f9b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBuZXV0cmFsfGVufDF8fHx8MTc2NzYwOTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Men"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="text-white">
                <h3 className="mb-2">Men</h3>
                <p className="text-white/90 mb-4">Contemporary classics</p>
                <span className="inline-flex items-center gap-2 border-b border-white pb-1">
                  Shop Now <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('shop')}
            className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601281866896-1576541e77a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzUxODYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Accessories"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="text-white">
                <h3 className="mb-2">Accessories</h3>
                <p className="text-white/90 mb-4">Finishing touches</p>
                <span className="inline-flex items-center gap-2 border-b border-white pb-1">
                  Shop Now <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-3">Best Sellers</h2>
            <p className="text-neutral-600">Our most loved pieces</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestsellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={(id) => onNavigate('product', id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('shop')}
              className="border border-neutral-900 text-neutral-900 px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-[#C77D6A] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">New Season Sale</h2>
          <p className="text-white/90 text-lg mb-8">
            Up to 30% off selected styles. Limited time only.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-white text-[#C77D6A] px-8 py-4 hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            Shop Sale
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="mb-3">New Arrivals</h2>
          <p className="text-neutral-600">Fresh styles for the season</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={(id) => onNavigate('product', id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
