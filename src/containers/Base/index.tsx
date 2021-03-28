import React from 'react';

import TopBar from './TopBar'
import Menu from './Menu';

import '../../styles/containers/base.css'

const Base= (props: any) =>  (
  <div className='container-base'>
    <div className='menu'>
      <Menu history= {props.history}/>
    </div>
    <div>
      <div className='top-bar'>
        <TopBar />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  </div>
)

export default Base;
