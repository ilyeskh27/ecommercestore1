import { Trash2, ChevronRight, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useStore();

  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-neutral-400" />
          </div>
          <h2 className="mb-3">Your cart is empty</h2>
          <p className="text-neutral-600 mb-8">
            Looks like you haven't added any items to your cart yet.
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
      <h1 className="mb-8">Shopping Cart ({cartItems.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex gap-4 pb-6 border-b border-neutral-200"
            >
              <div
                onClick={() => onNavigate('product')}
                className="w-24 h-32 bg-neutral-100 flex-shrink-0 cursor-pointer"
              >
                <ImageWithFallback
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3
                      onClick={() => onNavigate('product')}
                      className="mb-1 cursor-pointer hover:text-[#C77D6A] transition-colors"
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.selectedSize, item.selectedColor)
                    }
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-neutral-300">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity - 1
                        )
                      }
                      className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-neutral-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-neutral-50 p-6">
            <h3 className="mb-6">Order Summary</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-neutral-200 pt-3">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {shipping > 0 && (
              <div className="bg-[#C77D6A]/10 text-[#C77D6A] p-3 mb-6 text-sm">
                Add ${(100 - cartTotal).toFixed(2)} more for free shipping!
              </div>
            )}

            <button
              onClick={() => onNavigate('checkout')}
              className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-colors mb-3 flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('shop')}
              className="w-full border border-neutral-300 py-4 hover:border-neutral-900 transition-colors"
            >
              Continue Shopping
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 space-y-3 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C77D6A] rounded-full"></div>
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C77D6A] rounded-full"></div>
              <span>Free returns within 30 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C77D6A] rounded-full"></div>
              <span>Customer support available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
