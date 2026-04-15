/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import BrandStory from './pages/BrandStory';
import Lookbook from './pages/Lookbook';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'store':
        return <Store />;
      case 'brand':
        return <BrandStory />;
      case 'lookbook':
        return <Lookbook />;
      case 'cart':
        return <Cart onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
    </CartProvider>
  );
}
