import React, { useState } from 'react';
import Title from '../../components/Text/Title';
import Input from '../../components/Inputs/Simple';
import Button from '../../components/Buttons/Simple';


const RecoverPassword: React.FC = () => {
  const [email, setEmail ] = useState<string>('');
  const onchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  return(
    <div className='container-recover-password'>
      <div>
        <Title type='h1' title='LOJA'/>

        <p>
          Para reiniciar sua senha , digite seu email abaixo.
        </p>
        <p>
          Iremos enviar um link para você acessar e entrar uma nova senha.
        </p>
      </div>
      <div>
      <Input
        label="E-mail"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput(event)}
        type="email" />
      </div>
      <br />
      <div className="flex flex-center">
        <Button type="success" route='/reset-password/1' label="RESETAR SENHA" />
      </div>
    </div>
  );
}

export default RecoverPassword;