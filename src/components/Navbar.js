import React from 'react';
import { Link } from 'react-router-dom';
import { currentUser } from '../data/staticData';
import { LetterAvatar } from './LetterAvatar';
import logoUrl from '../assets/logo.svg';
import iconHome from '../assets/icon-home.svg';
import iconNetwork from '../assets/icon-network.svg';
import iconBell from '../assets/icon-bell.svg';
import iconProfile from '../assets/icon-profile.svg';
import '../styles/styles.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoUrl} alt="LinkedIn Mini Logo" width="42" height="42" />
        </Link>
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <img src={iconHome} alt="Home" width="24" height="24" className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/connections" className="nav-link">
              <img src={iconNetwork} alt="Network" width="24" height="24" className="nav-icon" />
              <span>My Network</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="nav-link">
              <img src={iconBell} alt="Notifications" width="24" height="24" className="nav-icon" />
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              <img src={iconProfile} alt="Profile" width="24" height="24" className="nav-icon" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <LetterAvatar name={currentUser.name || 'User'} className="profile-img" />
      </div>
    </nav>
  );
}
