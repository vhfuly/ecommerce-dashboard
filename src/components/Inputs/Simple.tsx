import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>  void;
  label: string;
  type?: string;
}

const InputSimple: React.FC<Props> = props => (
  <div className='input-simple'>
    <label>{props.label}</label>
    <input 
      type={props.type} 
      value={props.value} 
      onChange={props.onChange}
    />
  </div>
);

export default InputSimple;