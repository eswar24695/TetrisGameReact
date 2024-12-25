import React from "react";
import Board from './Board';
import { useState } from 'react';
import {checkWinner} from '../utils/helpers'

const Game: React.FC = ()=> {
    const [board,setBoard]=useState(Array(9).fill(null));
    const [xIsNext,setXIsNext]=useState(true);
    const [start,setStart]=useState(true);
    const winner=checkWinner(board);
    const handleClick=(i:any)=>{
        const boardCopy=[...board];
        if(winner || boardCopy[i]){
            return
        }
        boardCopy[i]=xIsNext?'X':'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }
    const jumpTo=()=>{

    }
    const readMoves=()=>{
        setBoard(Array(9).fill(null))
        setStart(!start)
        
    }
  return (
    <>
        <Board squares={board} onClick={handleClick}/>
        <button onClick={readMoves}>
            {start?"Start Game":"Start Game"}
        </button>
        <div></div>
        {winner?"Winner :"+winner: "Next Player: " + (xIsNext?"X":"O")}
    </>
  );
};
export default Game;