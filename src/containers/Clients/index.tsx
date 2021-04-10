import React, { useState } from 'react';
import Title from '../../components/Text/Title';
import Search from '../../components/Inputs/Search';
import Pagination from '../../components/Pagination/Simple';

import SimpleTable from '../../components/Tables/Simple';


const Clients: React.FC = () => {
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(0);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const changeCurrentNumber = (current: number )=> setCurrent(current);
  const data: Data[] = [
    {
      'Cliente': 'cliente 1',
      'E-mail': 'cliente1@mail.com',
      'Telefone': '11 1234-5678',
      'CPF': '111.222.333.45',
      'botãoDetalhes': '/client/cliente1@mail.com'
    },
    {
      'Cliente': 'cliente 2',
      'E-mail': 'cliente2@mail.com',
      'Telefone': '11 1234-5678',
      'CPF': '111.222.333.45',
      'botãoDetalhes': '/client/cliente2@mail.com'
    },
    {
      'Cliente': 'cliente 3',
      'E-mail': 'cliente3@mail.com',
      'Telefone': '11 1234-5678',
      'CPF': '111.222.333.45',
      'botãoDetalhes': '/client/cliente3@mail.com'
    },
  ]
  type Data = {
    'Cliente': string;
    'E-mail': string;
    'Telefone': string;
    'CPF': string;
    'botãoDetalhes': string;
  }
console.log(search)
  return (
    <div className='center flex'>
      <div className='card'>
        <Title type ='h1' title='Clientes' />
        <Search
          value ={search}
          placeholder={'Pesquise aqui pelo nome do cliente ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
          onClick={ () => alert('Pesquisando...!')}
        />
        <SimpleTable
          header = { ['Cliente', 'E-mail', 'Telefone', 'CPF' ]}
          data = {data}
        />
        <Pagination 
          offset = {current}
          total = {120}
          limit = {20}
          onClick ={ (currentNumber: number) => changeCurrentNumber(currentNumber)}
        />
      </div>
    </div>
  )
}

export default Clients;