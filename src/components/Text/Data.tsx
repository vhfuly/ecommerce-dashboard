import React from 'react';

type TextDataProps = {
  parameter: string;
  value: string;
}

export const TextData: React.FC<TextDataProps> = props => (
  <div className='text-data'>
    <strong>{props.parameter}:&nbsp;</strong>
    <span>{props.value}</span>
  </div>
);
