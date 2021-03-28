import React from 'react';
import Base from '../Base'

const base = (Component: React.FC) => {
  function ComponentBase(props: any) {
      return (
        <Base>
            <Component {...props}/>
        </Base>
      )
  }
  return ComponentBase
}

export default base;