import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <div className="header-links">
        <h1 className="nav-header">Bookstore CMS</h1>
        <div className="nav-links">
          <NavLink to="/" className="Links Books">
            BOOKS
          </NavLink>
          <NavLink to="/categories" className="Links">
            CATEGORIES
          </NavLink>
        </div>
      </div>
      <div className="login">
        <FontAwesomeIcon
          className="icon-login"
          icon={faCircleUser}
        />
      </div>
    </nav>
  );
}

export default Navbar;
