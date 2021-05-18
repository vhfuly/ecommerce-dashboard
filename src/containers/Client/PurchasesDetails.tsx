import React from 'react';
import { format } from 'date-fns'
import Title from '../../components/Text/Title';

import SimpleTable from '../../components/Tables/Simple';

const PurchasesDetails: React.FC = () => {
  const data: Data[] = [
    {
      'ID': 'zsxahgvxsa',
      'Valor Total': 89.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/zsxahgvxsa'

    },
    {
      'ID': '54fde456v',
      'Valor Total': 10.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Aguardando pagamento',
      'botãoDetalhes': '/purchase/54fde456v'

    },
    {
      'ID': 'fihefhoepfvh',
      'Valor Total': 106.90,
      'Data': format(new Date(),'dd-MM-yyyy' ),
      'Situação': 'Pagamento Concluido',
      'botãoDetalhes': '/purchase/fihefhoepfvh'

    },
  ]
  type Data = {
    'ID': string;
    'Valor Total': number;
    'Data': string;
    'Situação': string;
    'botãoDetalhes': string;
  }
  return(
    <div className='PurchasesDetails'>
    <Title type ='h3' title='Pedidos feitos' />
    <SimpleTable
      header = { ['ID', 'Valor Total', 'Data', 'Situação' ]}
      data = {data}
    />

  </div>
  );
}

export default PurchasesDetails;