import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

const Menu = () => {
  return (
  <div id="menu" className="menu-fechado">
      <Link className="menu-link" to="/dashboard"><i class="fa fa-home" aria-hidden="true"></i> Diário de bordo</Link>
      <Link className="menu-link" to="/"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Pedidos</Link>
      <Link className="menu-link" to="/"><i class="fa fa-archive" aria-hidden="true"></i> Produtos</Link>
      <Link className="menu-link" to="/"><i class="fa fa-question" aria-hidden="true"></i> Perguntas</Link>
      <Link className="menu-link" to="/"><i class="fa fa-usd" aria-hidden="true"></i> Financeiro</Link>
      <Link className="menu-link" to="/"><i class="fa fa-comments" aria-hidden="true"></i> Fórum</Link>
  </div>
  );
}

export default Menu;