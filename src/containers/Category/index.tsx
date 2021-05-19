import React from 'react';
import Back from '../../components/Links/Back';

import CategoryDetails from './CategoryDetails';
import ProductList from './ProductList';

const Category: React.FC = () => {

  return(
    <div className='Category'>
      <div className='card'>
        <Back path='/Categories'/>
        <div >
          <CategoryDetails />
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default Category;
