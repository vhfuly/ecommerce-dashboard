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
      'Cliente': 'cliente 1',
      'Valor Total': 89.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/zsxahgvxsa'

    },
    {
      'Cliente': 'cliente 2',
      'Valor Total': 10.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/54fde456v'

    },
    {
      'Cliente': 'cliente 2',
      'Valor Total': 106.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Pagamento Concluido',
      'botãoDetalhes': '/purchase/5456.4'

    },
  ]
  type Data = {
    'Cliente': string;
    'Valor Total': number;
    'Data': string;
    'Situação': string;
    'botãoDetalhes': string;
  }
  return (
    <div className='center flex'>
      <div className='card'>
        <Title type ='h1' title='Purchases' />
        <Search
          value ={search}
          placeholder={'Pesquise aqui pelo nome do cliente ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
          onClick={ () => alert('Pesquisando...!')}
        />
        <SimpleTable
          header = { ['Cliente', 'Valor Total', 'Data', 'Situação' ]}
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