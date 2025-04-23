import React, { useContext } from 'react';
import { ShoppingCart, User, Moon, Sun, Menu as MenuIcon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

interface NavbarProps {
  toggleLoginModal: (signup?: boolean) => void;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleLoginModal, toggleCart }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  
  const toggleMenu = () => {
    const navbar = document.querySelector('.navbar');
    navbar?.classList.toggle('active');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <a href="#" className="logo">Pizza Pie</a>
      <div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon size={24} />
      </div>

      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact</a></li>
        
        <div className="nav-actions">
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="username">Hi, {user?.name}</span>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button onClick={() => toggleLoginModal(false)}>Login</button>
              <button onClick={() => toggleLoginModal(true)}>Sign Up</button>
            </div>
          )}
          
          <div className="cart-icon" onClick={toggleCart}>
            <ShoppingCart size={22} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
          
          <div className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;