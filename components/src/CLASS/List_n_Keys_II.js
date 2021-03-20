import React from 'react'

function List_n_Keys_II(props) {
  const numeri = props.numeri;
  const lista = numeri.map((numero) =>
    <li key={numero.toString()}>{numero}</li>
  );

  return (
    <div>
      <ul>{lista}</ul>  
    </div>
  )
}

function ListaNumeri(props) {
  const numeri = [1, 2, 3, 4, 5];
  
  return (
    <List_n_Keys_II numeri={numeri} />
  )
}

export default ListaNumeri