import React from 'react'

type ContainerProps = {
    style: React.CSSProperties
}
const Container = (props:ContainerProps) => {
  return (
    <div style={props.style}>
        <h2>Text Red</h2>
    </div>
  )
}

export default Container
//Type of style that is passed in as a prop