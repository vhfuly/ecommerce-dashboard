
import React from 'react';
import ItemsList from './ItemsList';


const state = { open: true}

const { open } = state

type Props = {
  history: any;
}


const Menu: React.FC<Props> = (props) => (
  <div className='container-menu'> 
    <div className='item-top'>
      <i className='fas fa-arrow-left' />
    </div>
    <hr/>
    <ItemsList open={open} history={props.history} />
  </div>
)

export default Menu;
