import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import JournalPage from './pages/JournalPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutPickupPage from './pages/CheckoutPickupPage';
import CheckoutPaymentPage from './pages/CheckoutPaymentPage';
import ProcessingPage from './pages/ProcessingPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import ErrorPage from './pages/ErrorPage';
import ServerErrorPage from './pages/ServerErrorPage';
import MyAccountPage from './pages/MyAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/article/:id" element={<ArticleDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/pickup" element={<CheckoutPickupPage />} />
        <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
        <Route path="/checkout/processing" element={<ProcessingPage />} />
        <Route path="/order/tracking" element={<OrderTrackingPage />} />
        <Route path="/account" element={<MyAccountPage />} />
        <Route path="/server-error" element={<ServerErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App
