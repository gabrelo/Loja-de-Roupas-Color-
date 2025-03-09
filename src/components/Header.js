import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logotipo.png'; // Ajuste o caminho da imagem
import './Header.css'; // Importe o CSS


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logotipo Colorê" className="logo" />
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