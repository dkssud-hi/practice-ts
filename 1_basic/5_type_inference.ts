/**
 * Type Inference
 *
 * 타입 추론
 * 타입스크립트는 타입을 명시적으로 선언해주지 않아도 할당된 값을 유추해 변수에 타입을 할당한다.
 */
let stringType: string = "string";
const strintString: string = "hello";
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

//object타입은 const 키워드 만으로 객체 내부의 프로퍼티까지 구체적으로 타입을 유추할 수 는 없다.
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

//캐스팅을 이용하여 프로퍼티까지 구체적으로 타입유추가되어 "안유진"외의 값은 할당 불가능하다.
//yuJin3.name = '카리나';

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
//아래처럼 여러 타입의 값을 리스트의 요소로 넣는다면 넣어진 타입 모두 할당 가능한 리스트로 유추된다.
let numbersAndString = [1, 2, 3, "4", "5", "6"];
const numberBoolean = [1, 2, 3, true, false];

// numbers.push('6');
// Ts에서 선언된 array의 문제점은 배열의 길이를 넘어가는 요소를 불러옴에도 에러처리가 되지 않는다.
// 하지만 캐스팅을 이용해 튜플을 사용하면 이 문제점을 해결할 수 있다.
const number = numbers[100];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
// const로 캐스팅을 이용하면 더 엄격하게, readonly한 타입을 유추할 수 있다.
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
//const first2 = twoNumbers[3]; > 일반 리스트에선 아니지만 튜플에선 배열의 길이를 넘는 인덱스의 값을 참조하면 오류가 나도록 되어있다.
