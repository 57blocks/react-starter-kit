import React from 'react';
import logo from '../assets/logo.svg';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <p>
          57blocks React Starter Kit
        </p>
      </header>
    </div>
  );
}

export default Home;
