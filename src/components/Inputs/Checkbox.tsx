import React from 'react';

type Props = {
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<Props> = props => (
  <div className="checkbox">
    <input type="checkbox" checked={props.value} onChange={(event) => props.onChange(event)} />
    <span>&nbsp;{props.label}</span>
  </div>
);

export default Checkbox;