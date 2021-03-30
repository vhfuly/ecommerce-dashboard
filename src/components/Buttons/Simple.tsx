import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  type: string;
  onClick?: (event: React.MouseEvent) => void;
  route?: string;
  label: string;
}

const Button: React.FC<Props> = props => (
  <div className="button">
    <button 
      onClick={props.onClick}
      className={`button button-${ props.type || 'default'}`}>
        {props.label}
    </button>
  </div>
);

const ButtonSimple: React.FC<Props> = props => {
  if (props.route) {
    return (
      <Link to={props.route}>
        <Button type={props.type} onClick={props.onClick} label={props.label} />
      </Link>
    )
  } else return <Button type={props.type} onClick={props.onClick} label={props.label} />
};

export default ButtonSimple;