import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <IndexLink to="/" className="brand-logo center grey-text text-darken-3">
          Logo
        </IndexLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="about" className="grey-text text-darken-2"
              activeClassName="active">
              About
            </Link>  
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
