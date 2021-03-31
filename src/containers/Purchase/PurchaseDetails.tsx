import React from 'react';
import Title from '../../components/Text/Title';
import ButtonSimple from '../../components/Buttons/Simple';

const PurchaseDetails: React.FC = () => {

  return(
    <div className='container-purchase-details'>
      <div>
        <Title type='h2' title='pedido - cliente 1 - 04/03/2021'/>
        <ButtonSimple 
          type='danger'
          label='Cancelar Pedido'
          onClick={() => alert('Cancelado...!')}
        />
      </div>

    </div>
  );
}

export default PurchaseDetails;