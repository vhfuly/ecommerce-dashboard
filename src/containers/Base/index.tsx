import React from 'react';

import TopBar from './TopBar'
import Menu from './Menu';

const Base= (props: any) =>  (
  <div className='containerBase'>
    <div className='menu'>
      <Menu history= {props.history}/>
    </div>
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  </div>
)

export default Base;
