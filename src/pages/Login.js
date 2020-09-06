import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '../features/components/Input';
import Button from '../features/components/Button';
import Image from '../features/components/Image';
import logoOlist from '../image/logo-olist.svg';
import mobile from '../image/mobile.png';
import googlePlay from '../image/google-play.png';
import appStore from '../image/app-store.png';
import '../styles/login.css';

const Login = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  if (isRedirect) return <Redirect to="/welcome" />;

  return (
    <div className="login">
      <div className="login-app">
      <Image alt="Celular de cor verde água" src={mobile} width="100px" />
          <h3>conheça o novo aplicativo olist </h3>
          <span> Acesse sua conta do olist pelo celular
          e tenha mais tempo para focar na competitividade da sua loja.
        </span>
        <div>
        <Image alt="Simbolo do Google Play" src={googlePlay} width="150px" />
        <Image alt="Simbolo App Store" src={appStore} width="150px" />
        </div>
      </div>
      <div>
        <Image alt="Logo da Olist" src={logoOlist} width="100px" />

        <span>email</span>
        <Input
          placeholder="ex.: seunome@email.com.br"
          id="email"
          name="email"
        />
        <span>redefinir sua senha</span>
        <span>senha</span>
        <Input
          type="password"
          placeholder="Digite sua senha"
          id="senha"
          name="senha"
        />
        <Button
          onClick={() => {
            setIsRedirect(true);
          }}
        >
          entrar
        </Button>

        <span>
          Não é um cliente olist? <Link to="/"> Crie sua conta. </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;