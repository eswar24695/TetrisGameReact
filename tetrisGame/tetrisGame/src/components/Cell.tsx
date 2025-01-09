import React from 'react'
import {StyledCell} from "./styles/StyledCell.js"
import { TETROMINUS } from '../tetrominos';


type cellProps={
  type:string | number
}

const Cell:React.FC<cellProps> = ({type}) => {
  return (
    <StyledCell type={type} color={TETROMINUS[type].color} />
  )
}

export default Cell