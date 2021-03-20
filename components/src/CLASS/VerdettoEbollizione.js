import React from 'react'

export default  function VerdettoEbollizione(props) {
  if (props.celsius >= 100) {
    return <p>L'acqua bollirebbe</p>
  }
  return <p>L'acqua non bollirebbe</p>
}

