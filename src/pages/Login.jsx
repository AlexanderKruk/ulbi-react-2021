import React from 'react';
import { Input } from '../components/ui/Input/Input';
import { Button } from '../components/ui/Button/Button'

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <Input/>
        <Input/>
        <Button>Login</Button>
      </form>
    </div>
  );
};
