import React from "react";
interface SquareProps{
    value:string | null,
    onClick:()=> void

}
const style={
    background:'lightblue',
    border:'2px solid darkblue',
    borderRadius:'10px',
    fontSize:'30px',
    height:"250px",
    width:'250px',
    fontWeight:'800',
    cursor:'pointer',
    outline:'none'

}

const Square:React.FC<SquareProps> = ({value,onClick})=> {
  return (
    <>
      <button style={style} onClick={onClick}>{value}</button>
    </>
  );
};
export default Square;