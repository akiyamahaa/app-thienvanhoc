export enum EMode {
  EASY,
  MEDIUM,
  HARD,
}

export const checkEqualPuzzle = (
  puzzle1: readonly number[],
  puzzle2: number[]
) => {
  for (let i = 0; i < puzzle1.length; i++) {
    if (puzzle1[i] !== puzzle2[i]) return false;
  }
  return true;
};

export const finishPuzzle = {
  [EMode.EASY]: [0, 1, 2, 3],
  [EMode.MEDIUM]: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [EMode.HARD]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

export const randomPuzzle = {
  [EMode.EASY]: [
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ],
  [EMode.MEDIUM]: [
    [0, 2, 8, 1, 5, 4, 7, 3, 6],
    [0, 6, 5, 2, 7, 8, 4, 1, 3],
    [0, 8, 3, 5, 6, 2, 4, 7, 1],
    [0, 6, 3, 8, 7, 1, 5, 2, 4],
    [0, 8, 1, 5, 3, 4, 6, 7, 2],
    [0, 1, 4, 8, 5, 2, 6, 3, 7],
  ],
  [EMode.HARD]: [
    [0, 5, 2, 3, 8, 4, 1, 7, 9, 10, 6, 11, 12, 13, 14, 15],
    [0, 8, 2, 3, 4, 5, 1, 6, 9, 13, 11, 7, 12, 14, 10, 15],
    [0, 4, 8, 3, 9, 13, 2, 1, 12, 11, 5, 6, 14, 10, 15, 7],
  ],
};

export const modePuzzle = (mode: EMode) => {
  let n;
  switch (mode) {
    case EMode.EASY:
      n = 4;
      break;
    case EMode.MEDIUM:
      n = 9;
      break;
    case EMode.HARD:
      n = 16;
      break;
    default:
      n = 4;
      break;
  }
  return Array.from({ length: n }, (_, index) => index);
};

export interface IPuzzle {
  id: number;
  image: string;
  mode: EMode;
  result: string[];
}

export const puzzleData: IPuzzle[] = [
  {
    id: 1,
    image:
      "https://tepbac.com/upload/news/ge_image/2021/05/pexels-photo-3361052_1621385094.jpg",
    mode: EMode.EASY,
    result: ["camaptrang", "daubua"],
  },
  {
    id: 2,
    image:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/10/10/759376/Seaturtle.jpg",
    mode: EMode.MEDIUM,
    result: ["daubua"],
  },
  {
    id: 3,
    image: "https://ktmt.vnmediacdn.com/images/2022/02/17/42-1645067044-44.jpg",
    mode: EMode.HARD,
    result: ["daubua"],
  },
];
