export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = (): [number, string][][] => {
  return Array.from({ length: STAGE_HEIGHT }, () => new Array(STAGE_WIDTH).fill([0, "clear"]));
};
export const checkCollision=(player,stage,{x:moveX,y:moveY})=>{
  for(let i=0;i<player.tetromino.length;i++){
    for(let j=0;j<player.tetromino[0].length;j++){
      if(player.tetromino[i][j]!==0){
        if(!stage[i+player.pos.y+moveY] || !stage[i+player.pos.y+moveY][j+player.pos.x+moveX] || stage[i+player.pos.y+moveY][j+player.pos.x+moveX][1]!='clear'){
          console.log("Returning true")
          return true;
        }

      }
      //check for tetromino not going out in y direction

      //check for tetromino not going out in x direction

      //check to make the tetromino check for the collision 
      

    }
  }
  return false;

}
