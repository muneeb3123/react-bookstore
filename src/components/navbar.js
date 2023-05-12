import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <h1 className="nav-header">Homepage</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="Links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="Links">
            Categories
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleUser}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
