import React, { useState } from 'react';
import ButtonSimple from '../Buttons/Simple';

type Props = {
  value: string;
  name: string;
  handleSubmit: (value: string) => void;
}
const InputValue: React.FC<Props> = props => {
  const [value, setValue] = useState(props.value);
  const [from, setFrom] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const toggleFrom = () => {
    setFrom(!from);
    setValue(props.value);
  }

  const handleSubmit = (value: string) => {
    props.handleSubmit(value);
    toggleFrom();
  }

  if (from) return (
    <div className="flex input-value input-value-open">
      <div>
        <input 
          value={value}
          onChange={onChange}
          name={props.name}
        />
      </div>
      <div className="flex">
        <ButtonSimple 
          type='success button-small'
          onClick={() => handleSubmit(value)}
          label={(<i className='fas fa-check' />)}
        />
        <ButtonSimple 
          type='danger button-small'
          onClick={toggleFrom}
          label={(<i className='fas fa-times' />)}
        />
      </div>
    </div>

  )
  else return (
    <div className="input-value flex">
      <span onClick={toggleFrom}>{props.value}</span>
        <ButtonSimple 
          type='warning button-small'
          onClick={toggleFrom}
          label={(<i className='fas fa-edit' />)}
        />
    </div>
  );
  
}

export default InputValue