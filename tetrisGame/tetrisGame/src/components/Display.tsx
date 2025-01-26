import React from 'react'
import {StyledDisplay} from "./styles/styledDisplay"

type displayProps={
    gameOver:boolean,
    text:string
}

const Display:React.FC<displayProps> = ({gameOver,text}) => {
  return (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  )
}

export default Display