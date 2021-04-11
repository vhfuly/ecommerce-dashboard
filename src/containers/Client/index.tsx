import React from 'react';

import ClientDetails from './ClientDetails';
// import PurchasesDetails from './PurchasesDetails';
import Back from '../../components/Links/Back';

const Client: React.FC = () => {

  return(
    <div className='flex flexColumn '>
      <div className='card'>
        <Back path='/clients'/>
        <ClientDetails />
      </div>
      <div className='card flex flex-1'>
        {/* <PurchasesDetails /> */}
      </div>
    </div>
  );
}

export default Client;