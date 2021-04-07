import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Text/Title';
import Input from '../../components/Inputs/Simple';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Buttons/Simple';

import '../../styles/containers/login.css'

type LoginState = {
  email: string;
  password: string;
  optionRemember: boolean;
}

const Login: React.FC = () =>{
  const [login, setLogin ] = useState<LoginState>({
    email:'',
    password: '',
    optionRemember: true,
  });


  const onchangeInput = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({...login, [field]: event.target.value});
  }

  const onChangeCheckBox = (field: string) => {
    setLogin({...login, [field]: !login.optionRemember})
  }
  console.log(login)
  return (
    <div className='container-login'>
      <div className='card'>
        <div className='flex flexColumn center'>
          <Title type='h1' title='Loja' />
          <p>Faça seu Login abaixo</p>
        </div>
        <br/><br/>
          <Input 
            label='Email : '
            value={login.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('email', event)}
          />
          <Input 
            label='Password : '
            value={login.password}
            type='password'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('password', event)}
          />
        <div className='flex'>
          <div className='flex-1'>
            <Checkbox 
              value={login.optionRemember} 
              onChange ={() => onChangeCheckBox('optionRemember')}
              label='Lembrar?'
            />
          </div>
          <div className='flex-end'>
            <Link to='/recover-password'><small>Esqueceu sua senha?</small></Link>
          </div>
        </div>
        <div className='button-login'>
          <Button type='success' route='/' label='Entrar'/>
        </div>
      </div>
    </div>
  );
}

export default Login;