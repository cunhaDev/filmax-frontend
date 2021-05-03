import React from 'react';
import './styles.css';
import Logo from '../../assets/Logo.svg';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header(){

  const currentDate = format(new Date(),
  'EEEEEE, d MMMM', {locale: ptBR,});
  
  return(
    <header className="headerContainer">
      <img src={Logo} alt="logo"/>

      <p>O melhor Repo de Links, sempre.</p>

      <span>{currentDate}</span>
    </header>
  );
}