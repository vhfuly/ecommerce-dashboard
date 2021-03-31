import React from 'react';

import PurchaseDetails from './PurchaseDetails';
import DeliveryDetails from './DeliveryDetails';
import PaymentsDetails from './PaymentsDetails';

const Purchase: React.FC = () => {

  return(
    <div className='container-purchase'>
      <div>
        <PurchaseDetails />
      </div>
      <div>
        <div>
          <DeliveryDetails />
        </div>
        <div>
          <PaymentsDetails />
        </div>
      </div>
    
    </div>
  );
}

export default Purchase;



