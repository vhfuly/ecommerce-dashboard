import React, { useState } from 'react';
import ButtonSimple from '../Buttons/Simple';
import InputSimple from '../Inputs/Simple';

import '../../styles/components/list.css';

type Props = {
  data: string[];
  onRemove?: any;
  onAdd: (text: string) => void;
}

const DynamicList: React.FC<Props> = props => {
  const [text, setText] = useState('');
  const onchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  const onAdd = (text: string) => {
    props.onAdd(text);
    setText('');
  }
  
  return(
    <div>
      {
        props.data.map ((item, index) => (
          <div>
            <div key={index} className='border-green'>
              <span>{item}</span>
            </div>
          { 
            props.onRemove &&
            <div>
            <ButtonSimple 
              type='danger'
              onClick={() => props.onRemove(index)}
              label='-'
              />
            </div>
          }
          </div>    
        ))
      }
      <div className='input-list'>
        <InputSimple
          type='text'
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput(event)}
        />
        <ButtonSimple 
          type='success'
          onClick={() => onAdd(text)}
          label='+'
        />
      </div>

    </div>
  )
}

export default DynamicList;
