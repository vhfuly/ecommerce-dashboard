import React, { useState } from 'react';
import { format } from 'date-fns'
import Title from '../../components/Text/Title';
import Search from '../../components/Inputs/Search';
import Pagination from '../../components/Pagination/Simple';

import SimpleTable from '../../components/Tables/Simple';


const Purchases: React.FC = () => {
  const [search, setSearch] = useState('');
  const [current, setCurrent] = useState(0);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const changeCurrentNumber = (current: number )=> setCurrent(current);
  const data: Data[] = [
    {
      'client': 'cliente 1',
      'valor': 89.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/zsxahgvxsa'

    },
    {
      'client': 'cliente 2',
      'valor': 10.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/54fde456v'

    },
    {
      'client': 'cliente 2',
      'valor': 106.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Pagamento Concluido',
      'botãoDetalhes': '/purchase/5456.4'

    },
  ]
  type Data = {
    client: string;
    valor: number;
    date: string;
    situacao: string;
    botãoDetalhes: string;
  } 
console.log(search)
  return (
    <div className='Purchases'>
      <div className='card'>
        <Title type ='h1' title='Purchases' />
        <Search
          value ={search}
          placeholder={'Pesquisa aqi pelo nome do cliente ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
          onClick={ () => alert('Pesquisando...!')}
        />
        <SimpleTable
          header = { ['cliente', 'Valor Total', 'Data', 'Situação' ]}
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

export default Purchases;