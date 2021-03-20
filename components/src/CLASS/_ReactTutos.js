import React, { Component } from 'react'
import UserAccount from './UserAccount';
import ActionLink from './ActionLink';
import Interruttore from './Interruttore';
import Benvenuto from './Autenticato';
import ControlLogin from './ControlLogin';
import CasellaPosta from './CasellaPosta';
import messaggi from './CasellaPosta';
import Pagina from './MessaggioAvviso';
import List_n_Keys from './List_n_Keys';
import ListaNumeri from './List_n_Keys_II';
import ListaArticoli from './Articoli';
import Blog from './Blog';
import FormNome from './Form';
import FormTema from './FormTema';
import FormGusti from './FormGusti';
import Prenotazione from './Prenotazione';
import Calcolatore from './Calcolatore';
import CiaoMondo from './CiaoMondo';

export default class _ReactTutos extends Component {
  render() {
    return (
      <div>
        <CiaoMondo />
        <UserAccount />
        <ActionLink />
        <Interruttore />
        <br/>
        <Benvenuto utenteAutenticato={false} />
        <ControlLogin />
        <CasellaPosta messaggiNonLetti={messaggi}/>
        <Pagina />
        <List_n_Keys />
        <ListaNumeri />
        <ListaArticoli />
        <Blog />
        <FormNome />
        <FormTema />
        <FormGusti />
        <Prenotazione />
        <Calcolatore />
      </div>
    )
  }
}
