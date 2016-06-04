import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <IndexLink to="/" className="brand-logo center">Logo</IndexLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
