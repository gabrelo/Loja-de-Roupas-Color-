import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Loja de Roupas</h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;