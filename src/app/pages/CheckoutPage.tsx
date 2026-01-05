import { useState } from 'react';
import { Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const { cartItems, cartTotal } = useStore();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');

  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mb-3">Order Confirmed!</h1>
        <p className="text-neutral-600 mb-2">
          Thank you for your purchase. We've sent a confirmation email to {formData.email}.
        </p>
        <p className="text-neutral-600 mb-8">
          Your order number is <strong>#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="border border-neutral-300 px-8 py-3 hover:border-neutral-900 transition-colors"
          >
            Continue Shopping
          </button>
          <button className="bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-800 transition-colors">
            Track Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Lock className="w-5 h-5 text-[#C77D6A]" />
        <span className="text-sm text-neutral-600">Secure Checkout</span>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 ${
              step === 'shipping' ? 'text-neutral-900' : 'text-neutral-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'shipping' ? 'bg-neutral-900 text-white' : 'bg-neutral-200'
              }`}
            >
              1
            </div>
            <span className="hidden sm:inline">Shipping</span>
          </div>
          <div className="w-16 h-px bg-neutral-200"></div>
          <div
            className={`flex items-center gap-2 ${
              step === 'payment' ? 'text-neutral-900' : 'text-neutral-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-neutral-900 text-white' : 'bg-neutral-200'
              }`}
            >
              2
            </div>
            <span className="hidden sm:inline">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          {step === 'shipping' ? (
            <form onSubmit={handleShippingSubmit}>
              <div className="mb-8">
                <h2 className="mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('cart')}
                  className="flex-1 border border-neutral-300 py-3 hover:border-neutral-900 transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-neutral-900 text-white py-3 hover:bg-neutral-800 transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-8">
                <h2 className="mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 mt-6">
                    <p className="text-sm text-neutral-600">
                      Your payment information is encrypted and secure. We do not store your card details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="flex-1 border border-neutral-300 py-3 hover:border-neutral-900 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-neutral-900 text-white py-3 hover:bg-neutral-800 transition-colors"
                >
                  Complete Order
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-neutral-50 p-6">
            <h3 className="mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-3"
                >
                  <div className="w-16 h-20 bg-neutral-200 flex-shrink-0">
                    <ImageWithFallback
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm mb-1 truncate">{item.name}</p>
                    <p className="text-xs text-neutral-600 mb-1">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                    <p className="text-sm">
                      Qty: {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-neutral-200 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm">
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
          </div>
        </div>
      </div>
    </div>
  );
}
