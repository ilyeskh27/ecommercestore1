import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const { cartCount, wishlistItems } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'sale', label: 'Sale' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer flex items-center"
          >
            <span className="text-2xl tracking-tight">ÉLITE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id === 'home' ? 'home' : 'shop')}
                className={`transition-colors hover:text-neutral-600 ${
                  currentPage === item.id ? 'text-[#C77D6A]' : 'text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-neutral-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('wishlist')}
              className="relative p-2 hover:text-neutral-600 transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C77D6A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:text-neutral-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C77D6A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-3 pl-12 border border-neutral-300 rounded-none focus:outline-none focus:border-neutral-900"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id === 'home' ? 'home' : 'shop');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
