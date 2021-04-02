import React, { useState } from 'react';

import Title from '../../components/Text/Title';
import DynamicList from '../../components/Lists/DynamicList'


const PaymentsDetails: React.FC = () => {

  const [data, setData] = useState<string[]>(['Aguardando pagamento', "Processando pagamento"]);

  const onRemoveDynamicList = (index: number) => {
    const status = data.filter((item, indexArray) => indexArray !== index)
    setData(status);
  }

  const onAddDynamicList = (text: string) => {
    if (!text) return 
    setData([...data, text]);
  }


  
  return(
    <div className='container-payments-details'>
      <Title type='h4' title='Detalhes de Pagamento'/>
      <DynamicList 
        data={data}
        // onRemove={onRemoveDynamicList}
        onAdd={onAddDynamicList}
      />
    </div>
  );
}

export default PaymentsDetails;