import React from "react";
import Square from './Square';
interface BoardProps{
  squares:(string | null)[]
  onClick:(value:number)=> void
}
const style={
  border:'1px solid darkblue',
  borderRadius:'10px',
  width:'250px',
  height:'25opx',
  margin:'0 auto',
  display:'grid',
  gridTemplate:'repeat(3,1fr)/repeat(3,1fr)'

}

const Board: React.FC<BoardProps> = ({squares,onClick})=> {
  return (
    <>
    <div style={style}>
      {squares.map((square,index)=>{
        return (
          <Square key={index} value={square} onClick={()=>onClick(index)}/>

        )
      })

      }
    </div>
    </>
  );
};
export default Board;

