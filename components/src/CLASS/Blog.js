import React from 'react'

function BlogContainer(props) {
  const sidebar = (
    <ul>
      {props.articoli.map((articolo) =>
        <li key={articolo.id}>
          {articolo.titolo}
        </li>
      )}
    </ul>
  );
  const contenuto = props.articoli.map((articolo) => 
    <div kwy={articolo.id}>
      <h3>{articolo.titolo}</h3>
      <p>{articolo.testo}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {contenuto}  
    </div>
  );
}

const articoli = [
  {id: 1, titolo: 'Ciao Mondo', testo: 'Benvenuto in imparando React!'},
  {id: 2, titolo: 'Installazione', testo: 'Puoi Installare React usando mpn.'}
]

function Blog() {
  return (
    <BlogContainer articoli={articoli} />
  )
}

export default Blog