import { useState } from 'react';
import { Heart, Star, ChevronRight, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { products, reviews } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string, productId?: string) => void;
}

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === productId);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.color[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="mb-4">Product not found</p>
        <button
          onClick={() => onNavigate('shop')}
          className="text-[#C77D6A] hover:underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const inWishlist = isInWishlist(product.id);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <button onClick={() => onNavigate('home')} className="hover:text-neutral-900">
              Home
            </button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => onNavigate('shop')} className="hover:text-neutral-900">
              Shop
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-neutral-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-4">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[3/4] bg-neutral-100 border-2 transition-colors ${
                      selectedImage === index ? 'border-neutral-900' : 'border-transparent'
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C77D6A] text-[#C77D6A]'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-neutral-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h4 className="mb-3">Color: {selectedColor}</h4>
              <div className="flex gap-2">
                {product.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border transition-colors ${
                      selectedColor === color
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 hover:border-neutral-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4>Size: {selectedSize || 'Select a size'}</h4>
                <button className="text-sm text-neutral-600 hover:text-neutral-900 underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border transition-colors ${
                      selectedSize === size
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-300 hover:border-neutral-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h4 className="mb-3">Quantity</h4>
              <div className="flex items-center border border-neutral-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-neutral-100 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-neutral-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className="w-full border border-neutral-300 py-4 hover:border-neutral-900 transition-colors flex items-center justify-center gap-2"
              >
                <Heart
                  className={`w-5 h-5 ${inWishlist ? 'fill-[#C77D6A] text-[#C77D6A]' : ''}`}
                />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Product Features */}
            <div className="space-y-4 border-t border-neutral-200 pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#C77D6A]" />
                <div>
                  <p className="text-sm">Free shipping on orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-[#C77D6A]" />
                <div>
                  <p className="text-sm">Free returns within 30 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C77D6A]" />
                <div>
                  <p className="text-sm">2-year warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          {activeTab === 'description' ? (
            <div className="max-w-3xl">
              <p className="text-neutral-700 leading-relaxed mb-6">{product.description}</p>
              <div className="space-y-3">
                <h4>Details</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Premium quality materials</li>
                  <li>• Designed for comfort and style</li>
                  <li>• Made with sustainable practices</li>
                  <li>• Available in multiple colors</li>
                  <li>• Model is wearing size S</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-8 max-w-3xl">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-neutral-200 pb-8 last:border-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{review.author}</span>
                        {review.verified && (
                          <span className="text-xs text-neutral-600">(Verified Purchase)</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-[#C77D6A] text-[#C77D6A]'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-neutral-600">{review.date}</span>
                  </div>
                  <p className="text-neutral-700">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={(id) => onNavigate('product', id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
