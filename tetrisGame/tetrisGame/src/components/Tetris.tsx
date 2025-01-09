import React,{useState} from "react";
import Stage from "./Stage";
import Display from "./Display";
import Cell from "./Cell";
import StartButton from "./StartButton";
import { createStage } from "../gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris.js";
import usePlayer from "../hooks/usePlayer.js"
import useStage from "../hooks/useStage.js"

function dummyFunction() {
  "hi";
}

const Tetris = () => {
  const [dropTime,setDropTime]=useState(null);
  const [gameOver,setGameOver]=useState(false);
  const [player,updatePlayerPos,resetPlayer] =usePlayer();
  const [stage,setStage]=useStage();

  const movePlayer=(dir:number)=>{
    updatePlayerPos({x:dir,y:0})

  }
  const dropPlayer=()=>{

  }
  
  const move=({keyCode})=>{
    if(!gameOver){
      if(keyCode===37){ //leftarrow
        movePlayer(-1);
      }else if(keyCode===39){ //rightarrow
        movePlayer(1);
      }else if(keyCode===40){ //downarrow
        dropPlayer();
      }
    }

  }
  
  const startGame=()=>{
    setStage(createStage());
    resetPlayer();
    
  }

  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e=>move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver?<Display gameOver={gameOver} text="Game Over"/>:(
            <div>
              <Display text="Score" gameOver={gameOver} />
              <Display text="Rows" gameOver={gameOver} />
              <Display text="Level" gameOver={gameOver} />
            </div>
          )}
          
        </aside>
        <StartButton callback={startGame}/>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
