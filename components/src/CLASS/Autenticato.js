function BenvenutoUtente(props) {
  return <h1>Bentornato/a!</h1>;
}

function BenvenutoOspite(props) {
  return <h1>Alla prossima brutto stronzo</h1>;
}

function Benvenuto(props) {
  const utenteAutenticato = props.utenteAutenticato;
  if (utenteAutenticato) {
    return <BenvenutoUtente />;
  }
  return <BenvenutoOspite />;
}

export default Benvenuto