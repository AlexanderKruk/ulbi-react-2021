import React, { useContext } from 'react';
import { Input } from '../components/ui/Input/Input';
import { Button } from '../components/ui/Button/Button'
import { AuthContext } from '../context';

export const Login = () => {
  const {setIsAuth} = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', true)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Input/>
        <Input/>
        <Button>Login</Button>
      </form>
    </div>
  );
};
