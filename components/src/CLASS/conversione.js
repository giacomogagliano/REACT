export default  function conversione(temperatura, converti) {
  const input = parseFloat(temperatura);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converti(input);
  const rounded = Math.round(output *1000) /1000;
  return rounded.toString();
}