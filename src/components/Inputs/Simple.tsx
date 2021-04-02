import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>  void;
  label?: string;
  type?: string;
}

const InputSimple: React.FC<Props> = props => (
  <div className='input-simple'>
   { props.label && <label>{props.label}</label>}
    <input 
      type={props.type} 
      value={props.value} 
      onChange={(event) => props.onChange(event)}
    />
  </div>
);

export default InputSimple;