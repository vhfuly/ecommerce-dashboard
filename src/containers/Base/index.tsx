import React from 'react';

import TopBar from './TopBar'
import Menu from './Menu';

import '../../styles/containers/base.css'

const Base= (props: any) =>  (
  <div className='container-base'>
    <div className='menu'>
      <Menu history= {props.history}/>
    </div>
    <div className='container-data'>
      <TopBar />
      <main>
        {props.children}
      </main>
    </div>
  </div>
)

export default Base;
