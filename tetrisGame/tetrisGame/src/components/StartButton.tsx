import React from 'react'
import {StyledStartButton} from './styles/StyledStartButton.js'
type StartProps ={
    callback:()=>void
}

const StartButton:React.FC<StartProps> = ({callback}) => {
  return (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  )
}

export default StartButton