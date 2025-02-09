import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    const sweepRows = newStage => {
      let clearedRows = 0;
      const cleanedStage = newStage.reduce((ack, row) => {
        if (row.every(cell => cell[0] !== 0)) {
          clearedRows++;
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
        } else {
          ack.push(row);
        }
        return ack;
      }, []);
      setRowsCleared(clearedRows);
      return cleanedStage;
    };

    const updateStage = prevStage => {
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
