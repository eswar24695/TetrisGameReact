import {useCallback, useState} from "react";
import {randomTetrominus} from "../tetrominos"
import React from 'react'
import { preview } from "vite";


const usePlayer= () => {
    const [player,setPlayer]=useState({
        pos:{x:0,y:0},
        tetromino:randomTetrominus().shape,
        collided:false
    })
    const updatePlayerPos=({x,y,collided})=>{
        setPlayer(prev=>({
            ...prev,
            pos:{x:(prev.x+=x),y:(prev.y+=y)},
            collided
            
        }))
    }
    const resetPlayer=useCallback(()=>{
        setPlayer({
            pos:{x:0,y:0},
            tetromino:randomTetrominus().shape,
            collided:false
        })
    },[])
  return [player,updatePlayerPos,resetPlayer]
}

export default usePlayer