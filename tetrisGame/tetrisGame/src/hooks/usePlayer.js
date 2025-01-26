import {useCallback, useState} from "react";
import {randomTetrominus,TETROMINUS} from "../tetrominos"
import {STAGE_WIDTH,checkCollision} from "../gameHelpers.ts"
import React from 'react'



const usePlayer= () => {
    const [player,setPlayer]=useState({
        pos:{x:0,y:0},
        tetromino:TETROMINUS[0].shape,
        collided:false
    })
    const updatePlayerPos=({x,y,collided})=>{
        setPlayer(prev=>({
            ...prev,
            pos: { x: prev.pos.x + x, y: prev.pos.y + y },
            collided
            
        }))
    }
    const rotate = (matrix, dir) => {
        const transposed = [];
        for (let i = 0; i < matrix[0].length; i++) {
          const newRow = [];
          for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i]);
          }
          transposed.push(newRow);
        }
      
        if (dir > 0) return transposed.map((row) => row.reverse());
        return transposed.reverse();
      };
      
    const playerRotate=(stage,dir)=>{
        const clonedPlayer=JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
        const pos=clonedPlayer.pos.x;
        let offset=1;
        while(checkCollision(clonedPlayer,stage,{x:0,y:0})){
            clonedPlayer.pos.x+=offset;
            offset=-(offset+(offset>0 ? 1:-1))
            if(offset>clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }
        setPlayer(clonedPlayer);
    }
    const  resetPlayer=useCallback(()=>{
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino:randomTetrominus().shape,
            collided:false
        })
    },[])
  return [player,updatePlayerPos,resetPlayer,playerRotate]
}

export default usePlayer