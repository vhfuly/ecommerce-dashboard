import React from 'react';

function Base(props: any) {
  return (
    <div className=''>
      <div>
        <p>Menu</p>
      </div>
      <div>
        <div>
          barra top
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Base;