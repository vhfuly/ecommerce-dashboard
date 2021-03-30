import React, { useState } from 'react';

import Title from '../../components/Text/Title';
import Input from '../../components/Inputs/Simple';
import Button from '../../components/Buttons/Simple';

type ResetPasswordState = {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const [resetPassword, setResetPassword ] = useState<ResetPasswordState>({
    password:'',
    confirmPassword: '',
  });

  const onchangeInput = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassword({...resetPassword, [field]: event.target.value});
  }

  return(
    <div className='container-reset-password'>
       <div className='Card'>
        <div>
            <Title type='h1' title='LOJA' />
        </div>
        <br />
        <div>
          <p>
            Para reiniciar a senha, digite a nova senha e confirme no campo abaixo
          </p>
        </div>
        <br />
        <div>
          <Input 
            label="Senha" 
            type="password" 
            value={resetPassword.password} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('password', event)} />
          <Input 
            label="Confirmar Senha" 
            type="password" 
            value={resetPassword.confirmPassword} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('confirmPassword', event) } />
        </div>
        <br />
        <div className="flex flex-center">
          <Button type="success" route="/login" label="RESETAR SENHA" />
        </div>
    </div>
    </div>
  );
}

export default ResetPassword;