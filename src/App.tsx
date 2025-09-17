import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import JournalPage from './pages/JournalPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
