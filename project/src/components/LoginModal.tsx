import React, { useState, useContext, useEffect } from 'react';
import { X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginModal.css';

interface LoginModalProps {
  isSignUp: boolean;
  onClose: () => void;
  toggleMode: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isSignUp, onClose, toggleMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login, register } = useContext(AuthContext);

  // Add animation classes
  useEffect(() => {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    
    setTimeout(() => {
      overlay?.classList.add('show');
      modal?.classList.add('show');
    }, 10);
    
    return () => {
      overlay?.classList.remove('show');
      modal?.classList.remove('show');
    };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (isSignUp && name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (password === '') {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (isSignUp && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    if (isSignUp) {
      register({ name, email, password });
    } else {
      login(email, password);
    }
    
    onClose();
  };

  const handleClose = () => {
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    
    overlay?.classList.remove('show');
    modal?.classList.remove('show');
    
    setTimeout(onClose, 300);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <button className="close-button" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          )}
          
          <button type="submit" className="submit-button">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        
        <div className="modal-footer">
          <p>
            {isSignUp 
              ? 'Already have an account?' 
              : "Don't have an account?"}
            <button className="toggle-mode" onClick={toggleMode}>
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;