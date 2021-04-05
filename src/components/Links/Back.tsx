import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
};

const Back: React.FC<Props> = (props) => (
  <Link to={props.path} className='link-back'>
    <i className='fas fa-arrow-left'> Voltar </i>
  </Link>
);

export default Back;
