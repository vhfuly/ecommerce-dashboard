import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  history: any;
  open: boolean;
} 

const items = [
  { route: '/', icon: (<i className='fas fa-copy' />), title: 'Pedidos' },
  { route: '/clients', icon: (<i className='fas fa-users' />), title: 'Clientes' },
  { route: '/Categories', icon: (<i className='fas fa-clone' />), title: 'Categorias' },
  { route: '/products', icon: (<i className='fas fa-boxes' />), title: 'Produtos' },
  { route: '/settings', icon: (<i className='fas fa-cog' />), title: 'Configurações' },
  { route: '/profile', icon: (<i className='fas fa-user' />), title: 'Perfil' },
]

const ItemsList: React.FC<Props> = props => (
  <div className='container-items-list'>
    {
      items.map((item, index) => (

        <Link to={item.route} key={index}>
          <div className='item-menu'>
            <div>
              {item.icon}
            </div>
            {
              props.open && 
              (
                <div>
                  <span>{item.title}</span>
                </div>
              )
            }
          </div>
        </Link>
      ))
    }
  </div>
)

export default ItemsList;
