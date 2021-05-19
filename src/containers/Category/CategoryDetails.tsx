import React, { useState } from 'react';
import ButtonSimple from '../../components/Buttons/Simple';
import InputValue from '../../components/Inputs/InputValue';
import { TextData } from '../../components/Text/Data';
import Title from '../../components/Text/Title';


const CategoryDetails: React.FC = () => {
  const [category, setCategory] = useState({
    name: 'Categoria',
    code: 'categoria',
    availability: 'available',
  })

  return(
    <div className='CategoryDetails'>
      <div className='flex'>
        <div className='flex-1 flex'>
          <Title type='h1' title={category.name} />
        </div>
        <div className='flex-1 flex flex-end'>
          <ButtonSimple 
            onClick={() => alert('Salvo!')}
            label='Salvar'
            type='success'
          />
          <ButtonSimple 
            onClick={() => alert('Removido!')}
            label='Remover'
            type='danger'
          />
        </div>
      </div>
      <div className='flex flexColumn'>
        <TextData
          parameter='Código '
          value={(
            <InputValue
              name='name'
              value={category.code}
              noStyle
              handleSubmit = {(value) => setCategory({...category, code: value})}
            />
          )}
          />
        <TextData
          parameter='Nome '
          value={(
            <InputValue
              name='name'
              value={category.name}
              noStyle
              handleSubmit = {(value) => setCategory({...category, name: value})}
            />
          )}
          />
        <br />
         <TextData
          parameter='Disponibilidade '
          value={(
            <select value={category.availability} onChange={(event)=> setCategory({...category, availability: event.target.value})}>
              <option value='available'>Disponível</option>
              <option value='unavailable'>Indisponivel</option>
            </select>
          )}
          />
      </div>
    </div>
  );
}

export default CategoryDetails;
