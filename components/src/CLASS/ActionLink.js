function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Hai cliccato sul link.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Clicca qui
    </a>
  );
}

export default ActionLink