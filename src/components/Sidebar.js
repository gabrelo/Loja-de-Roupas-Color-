import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import './Sidebar.css'; // Importe o CSS

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Filtros</h2>
      <div className="filter-section">
        <h3>Categorias</h3>
        <ul>
          <li><Link to="/camisetas">Camisetas</Link></li>
          <li><Link to="/calcas">Calças</Link></li>
          <li><Link to="/vestidos">Vestidos</Link></li>
          <li><Link to="/acessorios">Acessórios</Link></li>
        </ul>
      </div>
      
    </aside>
  );
}

export default Sidebar;