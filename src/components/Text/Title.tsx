import React from 'react';

interface typesProps {
  type: string,
  title: string,
}

function Title(props: typesProps) {
  switch(props.type) {
    case 'h1':
      return (<h1 className='title'>{props.title}</h1>);
    case 'h2':
      return (<h2 className='secondary-title'>{props.title}</h2>);
    case 'h4':
      return (<h4 className='subtitle'>{props.title}</h4>);
    default:
      return (<h1 className='title'>{props.title}</h1>);
  }
}

export default Title;

