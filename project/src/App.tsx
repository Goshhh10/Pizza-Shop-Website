import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleLoginModal = (signup = false) => {
    setIsSignUp(signup);
    setShowLoginModal(!showLoginModal);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Navbar 
              toggleLoginModal={toggleLoginModal} 
              toggleCart={toggleCart}
            />
            
            <main>
              <Home />
              <About />
              <Menu toggleCart={toggleCart} />
              <Services />
              <Contact />
            </main>
            
            <Footer />
            
            {showLoginModal && (
              <LoginModal 
                isSignUp={isSignUp} 
                onClose={() => setShowLoginModal(false)}
                toggleMode={() => setIsSignUp(!isSignUp)}
              />
            )}
            
            <Cart 
              isOpen={showCart} 
              onClose={() => setShowCart(false)}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;