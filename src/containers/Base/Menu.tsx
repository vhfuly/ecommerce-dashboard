
import React, { useState } from 'react';
import ItemsList from './ItemsList';



type Props = {
  history: any;
}


const Menu: React.FC<Props> = (props) => {
  const[open, setOpen] = useState(true)
  
  const toggleOpen = () => setOpen(!open)

  return(
    <div className={`container-menu ${open ? 'menu-open' : ''}`}>
      <div className={`item-top item-${open ? 'flex-end' : 'flex-center'}`} onClick ={() => toggleOpen()}>
        <i className={`fas fa-arrow-${open ? 'left' :'right'}`} />
      </div>
      <ItemsList open={open} history={props.history} />
    </div>
  )
}

export default Menu;
