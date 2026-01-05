import { Truck, RefreshCw, CreditCard, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-16 lg:mt-24">
      {/* Trust badges */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-[#C77D6A]" />
              </div>
              <h4 className="mb-1">Free Shipping</h4>
              <p className="text-neutral-600 text-sm">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                <RefreshCw className="w-6 h-6 text-[#C77D6A]" />
              </div>
              <h4 className="mb-1">Easy Returns</h4>
              <p className="text-neutral-600 text-sm">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                <CreditCard className="w-6 h-6 text-[#C77D6A]" />
              </div>
              <h4 className="mb-1">Secure Payment</h4>
              <p className="text-neutral-600 text-sm">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-[#C77D6A]" />
              </div>
              <h4 className="mb-1">Quality Guarantee</h4>
              <p className="text-neutral-600 text-sm">Premium materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-2">Join Our Newsletter</h3>
            <p className="text-neutral-600 mb-6">
              Subscribe to receive updates, exclusive offers, and fashion inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900"
              />
              <button className="px-8 py-3 bg-[#C77D6A] text-white hover:bg-[#B56D5A] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="mb-4">Shop</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">
            © 2026 ÉLITE. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-600">
            <a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Facebook</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Pinterest</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
