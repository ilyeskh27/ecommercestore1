import { useState, useEffect } from 'react';
import { StoreProvider } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
  };

  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        
        <main className="flex-1">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} />}
          {currentPage === 'product' && (
            <ProductDetailPage
              productId={selectedProductId}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'cart' && <CartPage onNavigate={handleNavigate} />}
          {currentPage === 'checkout' && <CheckoutPage onNavigate={handleNavigate} />}
          {currentPage === 'wishlist' && <WishlistPage onNavigate={handleNavigate} />}
          {['women', 'men', 'accessories', 'sale'].includes(currentPage) && (
            <ShopPage onNavigate={handleNavigate} />
          )}
        </main>

        <Footer />
      </div>
    </StoreProvider>
  );
}
