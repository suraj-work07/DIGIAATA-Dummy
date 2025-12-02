import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { User } from '../types.d.ts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await fetch('http://localhost:8000/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('token');
            setToken(null);
          }
        } catch (error) {
          console.error('Failed to fetch user', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
    };
    fetchUser();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-surface text-text-primary p-4 shadow-soft-warm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold">digi-aata</Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-muted">Home</Link>
          <Link to="/products" className="hover:text-muted">Products</Link>
          <Link to="/about" className="hover:text-muted">About</Link>
          {user ? (
            <>
              <span className="text-muted">Hello, {user.full_name}</span>
              <button onClick={handleLogout} className="hover:text-muted">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-muted">Login</Link>
          )}
          <Link to="/cart" className="relative hover:text-muted">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <Link to="/" className="block py-2 text-center hover:bg-bg-base" onClick={toggleMenu}>Home</Link>
          <Link to="/products" className="block py-2 text-center hover:bg-bg-base" onClick={toggleMenu}>Products</Link>
          <Link to="/about" className="block py-2 text-center hover:bg-bg-base" onClick={toggleMenu}>About</Link>
          {user ? (
            <>
              <span className="block py-2 text-center text-muted">Hello, {user.full_name}</span>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block w-full py-2 text-center hover:bg-bg-base">Logout</button>
            </>
          ) : (
            <Link to="/login" className="block py-2 text-center hover:bg-bg-base" onClick={toggleMenu}>Login</Link>
          )}
          <Link to="/cart" className="block py-2 text-center hover:bg-bg-base" onClick={toggleMenu}>
            <div className="relative inline-block">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-accent-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
              )}
            </div>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
