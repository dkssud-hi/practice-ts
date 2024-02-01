/**
 * Spread Operator
 */
const onlyString = ["1", "2", "3", "4"];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [...onlyString];

const arr2 = [...onlyString, ...onlyNumbers];

//위와 같이 Spread Operator 를 이용하면 쉽게 배열을 풀 수 있다.
