import React from 'react'

function Articoli(props) {
  const articoli = props.articoli
  const listaArticoli = articoli.map((articoli) =>
    <li key={articoli.id}>
      {articoli}
    </li>
  )

  return (
    <div>
      <ul>{listaArticoli}</ul>
    </div>
  )
}

function ListaArticoli(props) {
  const articoli = ['CD', '12"', 'Mp3'];

  return (
    <Articoli articoli={articoli}/>
  )

}

export default ListaArticoli
