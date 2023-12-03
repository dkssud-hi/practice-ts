/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false'; > 이렇게하면 이미 boolean타입으로 유추가 되어 오류가 남

//const 키워드를 사용하여 변수를 선언하면 더 구체적으로 타입을 유추한다.
const constStringType = "const string"; //string 중에 'const string'값만 할당이 가능함
const constBooleanType = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2);

//객체 내의 값을 const로 캐스팅하면 더 구체적으로 타입선언을 할 수 있다.
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yuJin3.name = '코드팩토리';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
//const first2 = twoNumbers[3]; > 일반 리스트에선 아니지만 튜플에선 배열의 길이를 넘는 인덱스의 값을 참조하면 오류가 나도록 되어있다.
