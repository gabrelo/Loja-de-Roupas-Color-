import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Componentes das páginas
const Home = () => (
  <div>
    <h1>Home</h1>
    {/* Conteúdo da página Home pode ser expandido aqui */}
  </div>
);

const Produtos = () => (
  <div>
    <h1>Teste Produtos</h1>
    {/* Página vazia com o texto "Teste Produtos" */}
  </div>
);

const Sobre = () => (
  <div>
    <h1>Teste Sobre</h1>
    {/* Página vazia com o texto "Teste Sobre" */}
  </div>
);

const Contato = () => (
  <div>
    <h1>Teste Contato</h1>
    {/* Página vazia com o texto "Teste Contato" */}
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        {/* Cabeçalho da loja */}
        <Header />

        {/* Layout com Sidebar e conteúdo principal */}
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">
            {/* Definição das rotas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
        </div>

        {/* Rodapé da loja */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;