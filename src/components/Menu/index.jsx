import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

class Menu extends React.Component {
  render() {
    const menu = this.props.data;

    const menuBlock = (
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link
            to="/"
            className="menu__list-item-link"
            activeClassName="menu__list-item-link menu__list-item-link--active"
          >
            Posts
          </Link>
        </li>
        <li className="menu__list-item">
          <Link
            to="/about"
            className="menu__list-item-link"
            activeClassName="menu__list-item-link menu__list-item-link--active"
          >
            About Me
          </Link>
        </li>
      </ul>
    );

    return <nav className="menu">{menuBlock}</nav>;
  }
}

export default Menu;
