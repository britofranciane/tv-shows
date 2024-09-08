import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  const location = useLocation();
  const isNotHomePage = location.pathname !== '/';
  return (
    <div className="header">
      <h2 className="header__title">TV Shows</h2>
      {isNotHomePage && (
        <Link to="/" className="header__link">
          List Shows
        </Link>
      )}
    </div>
  );
};

export default Header;
