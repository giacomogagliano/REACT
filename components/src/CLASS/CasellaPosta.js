import React from 'react'

function CasellaPosta(props) {
  const messaggiNonLetti = props.messaggiNonLetti;
  return (
    <div>
      <h1>Ciao!</h1>
      {messaggiNonLetti.lenght > 0 && (
        <h2>
          Hai {messaggiNonLetti.length} messaggi non letti.
        </h2>
      )}
    </div>
  );
}

const messaggi = ['React','Re: React', 'Re:Re: React'];
export default CasellaPosta
