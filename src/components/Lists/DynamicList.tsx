import React, { useState } from 'react';
import ButtonSimple from '../Buttons/Simple';
import InputSimple from '../Inputs/Simple';

type Props = {
  data: string[];
  onRemove?: any;
  onAdd: (text: string) => void;
}

const DynamicList: React.FC<Props> = props => {
  const [text, setText] = useState('');
  const onchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);
  return(
    <div>
      {
        props.data.map ((item, index) => (
          <div>
            <div key={index}>
              <div>
                <span>{item}</span>
              </div>
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
      <div>
        <InputSimple
          type='text'
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput(event)}
        />
        <ButtonSimple 
          type='success'
          onClick={() => props.onAdd(text)}
          label='+'
        />
      </div>

    </div>
  )
}

export default DynamicList;
