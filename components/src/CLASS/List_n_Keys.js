import React from 'react'

// here how we log an array of values in the console with JS
// const numeri = [1, 2, 3, 4, 5];
// const lista = numeri.map(
//   (numero) => numero *2
// ); 
// console.log(lista);

const numeri = [1, 2, 3, 4, 5];
const lista = numeri.map((numero) =>
  <li key={numero.toString()}>{numero}</li>
);


function List_n_Keys() {
  return (
    <ul>
      {lista}
    </ul>
  )
}

export default List_n_Keys


