import React, { useState } from 'react';
import { format } from 'date-fns'
import Title from '../../components/Text/Title';
import Search from '../../components/Imputs/Search';

import SimpleTable from '../../components/Tables/Simple';


const Purchases: React.FC = () => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)
  const data: Data[] = [
    {
      'client': 'cliente 1',
      'valor': 89.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Aguardando pagamento',
      'botãoDetalhes': '/purchases/zsxahgvxsa'

    },
    {
      'client': 'cliente 2',
      'valor': 10.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Aguardando pagamento',
      'botãoDetalhes': '/purchases/54fde456v'

    },
    {
      'client': 'cliente 2',
      'valor': 106.90,
      'date': format(new Date(),'dd-MM-yyyy' ),
      'situacao': 'Pagamento Concluido',
      'botãoDetalhes': '/purchases/5456.4'

    },
  ]
  type Data = {
    client: string;
    valor: number;
    date: string;
    situacao: string;
    botãoDetalhes: string;
  } 
  return (
    <div className='Purchases'>
      <div className='card'>
        <Title type ='h1' title='Purchases' />
        <Search
          value ={search}
          placeholder={'Pesquisa aqi pelo nome do cliente ...'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeSearch(event) }
        />
        <SimpleTable
          header = { ['cliente', 'Valor Total', 'Data', 'Situação' ]}
          data = {data}
        />
        {/* 
        <Pagination /> */}
      </div>
    </div>
  )
}

export default Purchases;