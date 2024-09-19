import React,   {useState} from 'react'

export default function Component() {
  const [text,setText]=useState()

  const [updated,setUpdated]=useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const ButtonOnClick = (event) => {
    setUpdated(text)
  }
  return (
    <div>
      <input type="text" value={text} onChange={textOnChange}/>
      <button onClick={ButtonOnClick}>Actualizar</button>
      <p>texto input: {text}</p>
      <p>texto a actualizado: {updated}</p>
    </div>
  )
}
