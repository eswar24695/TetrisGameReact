export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = (): [number, string][][] => {
  return Array.from({ length: STAGE_HEIGHT }, () => new Array(STAGE_WIDTH).fill([0, "clear"]));
};
