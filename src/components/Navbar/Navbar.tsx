import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showNavbar = time > 2;

  return (
    <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
      <Link
        to="/"
        className={location.pathname === '/' ? 'active' : ''}
      >
        Homepage
      </Link>
      <Link
        to="/downloads"
        className={location.pathname === '/downloads' ? 'active' : ''}
      >
        Downloads
      </Link>
    </nav>
  );
};

export default Navbar;
