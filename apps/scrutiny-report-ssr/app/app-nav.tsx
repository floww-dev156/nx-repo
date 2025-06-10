import { useLocation, Link } from 'react-router-dom';
import './styles/nav.css';

export function AppNav(): JSX.Element {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  
  return (
    <nav className="app-nav">
      <Link 
        to="/" 
        className={isHome ? 'active' : ''}
        onClick={(e) => {
          // Prevent default if we're already on this page
          if (isHome) e.preventDefault();
        }}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={isAbout ? 'active' : ''}
        onClick={(e) => {
          // Prevent default if we're already on this page
          if (isAbout) e.preventDefault();
        }}
      >
        About
      </Link>
    </nav>
  );
}
