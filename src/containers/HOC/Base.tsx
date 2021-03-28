import React from 'react';
import Base from '../Base'

const base = (Component: any) => {
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