import React, { useState } from 'react';
import Title from '../../components/Text/Title';
import DynamicList from '../../components/Lists/DynamicList';
import InputValue from '../../components/Inputs/InputValue';

const DeliveryDetails: React.FC = () => {

  const [status, setStatus] = useState<string[]>(['Preparando para Envio', "Entregue a transportadora"]);
  const [trackingCode, setTrackingCode] = useState<string>('PA123456BR')

  const onAddDynamicList = (text: string) => {
    if (!text) return 
    setStatus([...status, text]);
  }

  const handleSubmit = (value: string) => {
    setTrackingCode(value)
    alert('Salvo!!!!!')
  }

  return(
    <div className='container-Delivery-detail'>
      <Title type='h4' title='Detalhes de Entrega'/>
      <label>Código de Rastreamento</label>
      <InputValue 
        value={trackingCode}
        handleSubmit={(value: string) => handleSubmit(value)}
        name='trackingCode'
      />
      <DynamicList 
        data={status}
        onAdd={onAddDynamicList}
      />
    </div>
  );
}

export default DeliveryDetails;