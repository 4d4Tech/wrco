import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoveryFeatures from './components/DiscoveryFeatures';
import SynopsisSection from './components/SynopsisSection';
import RevelationsSection from './components/RevelationsSection';
import ReviewCarousel from './components/ReviewCarousel';
import AuthorSpotlight from './components/AuthorSpotlight';
import PricingEditions from './components/PricingEditions';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import LookInsideModal from './components/LookInsideModal';
import ReviewModal from './components/ReviewModal';
import AudioSamplePlayer from './components/AudioSamplePlayer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import Snackbar from './components/Snackbar';

import { subscribeToReviews, subscribeToInventory } from './services/firebase';
import { INITIAL_REVIEWS, INITIAL_STOCK, BOOK_EDITIONS } from './data/bookData';

export default function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('wrco_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Real-time Firestore state
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [inventory, setInventory] = useState(INITIAL_STOCK);

  // Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLookInsideOpen, setIsLookInsideOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  // Snackbar Toast
  const [snackbar, setSnackbar] = useState({ message: '', type: 'success' });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('wrco_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Subscribe to real-time Firestore updates
  useEffect(() => {
    const unsubReviews = subscribeToReviews((updatedReviews) => {
      setReviews(updatedReviews);
    });

    const unsubInventory = subscribeToInventory((updatedStock) => {
      setInventory(updatedStock);
    });

    return () => {
      if (typeof unsubReviews === 'function') unsubReviews();
      if (typeof unsubInventory === 'function') unsubInventory();
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setSnackbar({ message, type });
    setTimeout(() => {
      setSnackbar({ message: '', type: 'success' });
    }, 4000);
  };

  // Cart operations
  const handleAddToCart = (edition) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === edition.id);
      if (existing) {
        return prev.map((item) =>
          item.id === edition.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...edition, quantity: 1 }];
    });
    showToast(`Added ${edition.name} to your bag!`);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from bag.', 'info');
  };

  const handleBuyNow = (edition) => {
    const directItem = [{ ...edition, quantity: 1 }];
    const subtotal = edition.price;
    const shipping = edition.id === 'digital' ? 0 : 4.95;
    const total = subtotal + shipping;

    setCheckoutData({
      cart: directItem,
      subtotal,
      shipping,
      discountAmount: 0,
      total
    });
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = (data) => {
    setCheckoutData(data);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (result) => {
    setIsCheckoutOpen(false);
    setCart([]);
    setOrderResult(result);
    setIsOrderSuccessOpen(true);
    showToast('Order confirmed! Receipt sent to your email.');
  };

  const scrollToEditions = () => {
    const el = document.getElementById('editions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      {/* Editorial Navigation Header */}
      <Navbar
        cartCount={cart.reduce((c, i) => c + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => {
          if (cart.length > 0) {
            handleProceedToCheckout({
              cart,
              subtotal: cart.reduce((s, i) => s + i.price * i.quantity, 0),
              shipping: 4.95,
              total: cart.reduce((s, i) => s + i.price * i.quantity, 0) + 4.95
            });
          } else {
            scrollToEditions();
          }
        }}
        onOpenLookInside={() => setIsLookInsideOpen(true)}
      />

      {/* Hero Section matching wrco.png */}
      <HeroSection
        onOpenLookInside={() => setIsLookInsideOpen(true)}
        onOpenAudioPlayer={() => setIsAudioPlayerOpen(true)}
        onScrollToEditions={scrollToEditions}
      />

      {/* 3-Column Discoveries Section matching wrco.png ("HOW THE BOOK SHATTERS HISTORY") */}
      <DiscoveryFeatures />

      {/* Academic & Historical Synopsis */}
      <SynopsisSection onOpenLookInside={() => setIsLookInsideOpen(true)} />

      {/* Split Revelations Section matching wrco.png ("THE REVELATIONS / INCLUDES") */}
      <RevelationsSection onScrollToEditions={scrollToEditions} />

      {/* Top 10 Verified Reviews Material 3 Carousel & Masonry Explorer */}
      <ReviewCarousel
        reviews={reviews}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
      />

      {/* Horace Butler Spotlight & 12+ Year Field Research */}
      <AuthorSpotlight />

      {/* Official Editions & Real-Time Firestore Inventory */}
      <PricingEditions
        inventory={inventory}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Footer with Firestore Newsletter */}
      <Footer onOpenLookInside={() => setIsLookInsideOpen(true)} />

      {/* --- MODALS & DRAWERS --- */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        onBrowseEditions={scrollToEditions}
      />

      <LookInsideModal
        isOpen={isLookInsideOpen}
        onClose={() => setIsLookInsideOpen(false)}
        onOrderClick={scrollToEditions}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={() => showToast('Review submitted! Thank you.')}
      />

      <AudioSamplePlayer
        isOpen={isAudioPlayerOpen}
        onClose={() => setIsAudioPlayerOpen(false)}
        onOrderAudio={() => {
          const audioEd = BOOK_EDITIONS.find(e => e.id === 'digital');
          if (audioEd) handleBuyNow(audioEd);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutData={checkoutData}
        onOrderSuccess={handleOrderSuccess}
      />

      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={() => setIsOrderSuccessOpen(false)}
        orderResult={orderResult}
      />

      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        onClose={() => setSnackbar({ message: '', type: 'success' })}
      />
    </div>
  );
}
