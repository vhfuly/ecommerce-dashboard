import React, { useState } from 'react';
import Title from '../../components/Text/Title';
import Search from '../../components/Imputs/Search';


const Purchases: React.FC = () => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)
  return (
    <div className='Purchases'>
      <div className='card'>
        <Title type ='h1' title='Purchases' />
        <Search
          value ={search}
          placeholder={'Pesquisa aqi pelo nome do cliente ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
        />
        {/* <Table />
        <Pagination /> */}
      </div>
    </div>
  )
}

export default Purchases;