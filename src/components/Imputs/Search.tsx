import React from 'react';

type Props = {
  value: string;
  placeholder: string;
  onChange: any;
}

const Search: React.FC<Props> = props => (
  <div className='search'>
    <input {...props }/>
  </div>
)

export default Search;