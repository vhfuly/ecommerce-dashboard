import React, { useState } from 'react';

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
    <div className="input-value input-value-open">
      <div>
        <input 
          value={value}
          onChange={onChange}
          name={props.name}
        />
      </div>
      <div>
        <div onClick={() => handleSubmit(value)}>
          <i className='fas fa-check' />
        </div>
        <div onClick={toggleFrom}>
          <i className='fas fa-times' />
        </div>
      </div>
  
    </div>

  )
  else return (
    <div className="input-value">
      <span>{props.value}</span>
      <div onClick={() => toggleFrom()}>
        <i className='fas fa-edit' />
      </div>
    </div>
  );
  
}

export default InputValue