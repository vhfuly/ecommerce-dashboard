import React from 'react';
import '../../styles/components/inputs.css'

type Props = {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: Function;
}

const Search: React.FC<Props> = props => (
  <div className='search'>
    <input value={props.value} placeholder={props.placeholder} onChange={(event) => props.onChange(event) }/>
    <button>
      <i className='fas fa-search' onClick={() => props.onClick()}/>
    </button>
  </div>
)

export default Search;