import React from 'react'

export default function FormattedDate(props) {
  return <h2>Sono le {props.date.toLocaleTimeString()}.</h2>;
}
