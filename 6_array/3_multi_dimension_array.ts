/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3] > 1차원 배열
 *
 * (2)
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ] > 2차원 배열 (= Multi Dimention Array)
 *
 * (3)
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ] > 3차원 배열
 */

// 2차원 배열 정의법
const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

const strAndNumbArr: (number | string)[][] = [
  [1, "2", 3],
  ["4", 5, "6"],
];

let strArrOrNumbArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

strArrOrNumbArr = [["1", "2", "3"]];

// 중첩 반복문을 활용하여 타입을 더 정확히 유추 가능
for (let arr of numb2DArr) {
  for (let item of arr) {
  }
}
