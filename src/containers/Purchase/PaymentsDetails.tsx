import React, { useState } from 'react';

import Title from '../../components/Text/Title';
import DynamicList from '../../components/Lists/DynamicList'


const PaymentsDetails: React.FC = () => {

  const [status, setStatus] = useState<string[]>(['Aguardando pagamento', "Processando pagamento"]);

  const onAddDynamicList = (text: string) => {
    if (!text) return 
    setStatus([...status, text]);
  }

  return(
    <div className='container-payments-details'>
      <Title type='h4' title='Detalhes de Pagamento'/>
      <DynamicList 
        data={status}
        onAdd={onAddDynamicList}
      />
    </div>
  );
}

export default PaymentsDetails;