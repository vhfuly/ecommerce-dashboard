import React, { useState } from 'react';
import ButtonSimple from '../../components/Buttons/Simple';
import InputValue from '../../components/Inputs/InputValue';
import { TextData } from '../../components/Text/Data';
import Title from '../../components/Text/Title';


const ClientDetails: React.FC = () => {
  const [client, setClient] = useState({
    name: 'Cliente 1',
    CPF: '111.222.333-05',
    phone: '12 11426-8854',
    birthDate: '10/01/1996',
    email: 'cliente1@gmail.com',

    street:'Rua teste, 123',
    city: 'São Paulo',
    state: 'SP',
    district: 'Centro',
    cep: '12345-198',
  })

  const handleSubmit = (field: string ,value: string) => {
    setClient({...client, [field]: value});
  }

  return(
    <div className='client-details'>
      <div className='flex'>
        <div className='flex flex-1'>
        <Title type='h1' title='Cliente 1'/>
        </div>
        <div className='flex flex-1 flex-end'>
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
      <div className='flex'>
        <div className='flex-1'>
          <TextData 
            parameter='Nome '
            value = {(
              <InputValue
                name='name' noStyle
                handleSubmit = {(value) => handleSubmit('name', value)}
                value={client.name}
              />
            )}
          />
          <TextData 
            parameter='CPF '
            value = {(
              <InputValue
                name='CPF' noStyle
                handleSubmit = {(value) => handleSubmit('CPF', value)}
                value={client.CPF}
              />
            )}
          />
          <TextData 
            parameter='Telefone '
            value = {(
              <InputValue
                name='phone' noStyle
                handleSubmit = {(value) => handleSubmit('phone', value)}
                value={client.phone}
              />
            )}
          />
          <TextData 
            parameter='E-mail  '
            value = {(
              <InputValue
                name='email' noStyle
                handleSubmit = {(value) => handleSubmit('email', value)}
                value={client.email}
              />
            )}
          />
          <TextData 
            parameter='Data de nascimento  '
            value = {(
              <InputValue
                name='birthDate' noStyle
                handleSubmit = {(value) => handleSubmit('birthDate', value)}
                value={client.birthDate}
              />
            )}
          />
        </div>
        <div className='flex-1'>
        <TextData 
            parameter='Endereço '
            value = {(
              <InputValue
                name='street' noStyle
                handleSubmit = {(value) => handleSubmit('street', value)}
                value={client.street}
              />
            )}
          />
          <TextData 
            parameter='Estado '
            value = {(
              <InputValue
                name='state' noStyle
                handleSubmit = {(value) => handleSubmit('state', value)}
                value={client.state}
              />
            )}
          />
          <TextData 
            parameter='Cidade '
            value = {(
              <InputValue
                name='city' noStyle
                handleSubmit = {(value) => handleSubmit('city', value)}
                value={client.city}
              />
            )}
          />
          <TextData 
            parameter='Bairro  '
            value = {(
              <InputValue
                name='district' noStyle
                handleSubmit = {(value) => handleSubmit('district', value)}
                value={client.district}
              />
            )}
          />
          <TextData 
            parameter='CEP  '
            value = {(
              <InputValue
                name='cep' noStyle
                handleSubmit = {(value) => handleSubmit('cep', value)}
                value={client.cep}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;