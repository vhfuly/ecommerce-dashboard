import React from 'react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => (
  <div className='containerTopBar'> 
    <div className='viewStore'>
      <a href='/'>Ver Loja</a>
    </div>
    <div className='logout'>
      <Link to='logout'>sair</Link>
    </div>
  </div>
)

export default TopBar;