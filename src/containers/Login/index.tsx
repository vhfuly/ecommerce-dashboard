import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Text/Title';
import Input from '../../components/Inputs/Simple';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Buttons/Simple';

type Login = {
  email: string;
  password: string;
  optionRemember: boolean;
}

const Login: React.FC = () =>{
  const [login, setLogin ] = useState<Login>({
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
        <Title type='h1' title='Loja' />
        <p>Faça seu Login abaixo</p>
        <Input 
          label='Email'
          value={login.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('email', event)}
        />
        <Input 
          label='Password'
          value={login.password}
          type='password'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onchangeInput('password', event)}
        />
      </div>
      <div>
        <div>
          <Checkbox 
            value={login.optionRemember} 
            onChange ={() => onChangeCheckBox('optionRemember')}
            label='Lembrar?'
          />
        </div>
        <div>
          <Link to='/recover-password'>Esqueceu sua senha?</Link>
        </div>
        <Button type='success' route='/' label='Entrar'/>
      </div>
    </div>
  );
}

export default Login;