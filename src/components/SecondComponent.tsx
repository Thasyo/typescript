import React from 'react'

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h1>Meu segundo componente</h1>
        <p>Meu nome é: {props.name}</p>
    </div>
  )
}

export default SecondComponent