import React from 'react'
import Cell from './Cell'
import {StyledStage} from "./styles/StyledStage.js"

type StageProps={
    stage:[number , string][][]
}

const Stage:React.FC<StageProps> = ({stage}) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* <Cell type='dummy'/> */}
        {stage.map((row)=>{ return row.map((cell,cellidx)=>{ return <Cell key={cellidx} type={cell[0]}/>})})}

    </StyledStage>
  )
}

export default Stage