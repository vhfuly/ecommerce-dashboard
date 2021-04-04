import React from 'react';

import PurchaseDetails from './PurchaseDetails';
import DeliveryDetails from './DeliveryDetails';
import PaymentsDetails from './PaymentsDetails';
import '../../styles/containers/purchase.css';

const Purchase: React.FC = () => {

  return(
    <div className='flex flexColumn'>
      <div className='card'>
        <PurchaseDetails />
      </div>
      <div className='flex center'>
        <div className='card'>
          <DeliveryDetails />
        </div>
        <div className='card'>
          <PaymentsDetails />
        </div>
      </div>
    
    </div>
  );
}

export default Purchase;



