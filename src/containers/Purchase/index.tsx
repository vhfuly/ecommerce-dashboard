import React from 'react';

import PurchaseDetails from './PurchaseDetails';
import DeliveryDetails from './DeliveryDetails';
import PaymentsDetails from './PaymentsDetails';
import '../../styles/containers/purchase.css';
import Back from '../../components/Links/Back';

const Purchase: React.FC = () => {

  return(
    <div className='flex flexColumn '>
      <div className='card'>
        <Back path='/'/>
        <PurchaseDetails />
      </div>
      <div className='flex center'>
        <div className='card flex flex-1'>
          <DeliveryDetails />
        </div>
        <div className='card flex flex-1'>
          <PaymentsDetails />
        </div>
      </div>
    
    </div>
  );
}

export default Purchase;



