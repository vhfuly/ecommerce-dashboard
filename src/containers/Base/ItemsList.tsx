import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  history: any;
  open: boolean;
} 

const ItemsList: React.FC<Props> = props => (
  <div>
    <Link to={'/'}>
      <div className='item-menu'>
        <div>
          <i className='fas fa-copy' />
        </div>

        <div>
          <span>Pedidos</span>
        </div>

      </div>
    </Link>
  </div>
)

export default ItemsList;
