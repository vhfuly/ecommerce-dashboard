import React, { ReactElement } from 'react';

type TextDataProps = {
  parameter: string;
  value: string | ReactElement;
}

export const TextData: React.FC<TextDataProps> = props => (
  <div className='text-data flex'>
    <strong className='flex center'>{props.parameter}:&nbsp;</strong>
    <span>{props.value}</span>
  </div>
);
