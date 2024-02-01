/**
 * Tuple : 더 엄격한 list
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringTuple: [number, string] = [23, "코드팩토리"]; // 배열 안의 요소의 갯수,순서,타입까지 관리할 수 있다.

numberAndStringTuple.push("아이유");
console.log(numberAndStringTuple);
// 자바스크립트엔 튜플의 개념이 없다, 그런데 빌드 과정에서 push 메소드가 허용되어버려 런타임 때 아무 에러 없이 push가 되어버린다.

// 이를 방지하기 위해 readonly 상태를 추가해 push를 불가하게 한다.
let unmodifiableTuple: readonly [number, string] = [23, "코드팩토리"];

// unmodifiableTuple.push();

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

//캐스팅을 활용해 Tuple처럼 타입을 유추할 수 있다.
let actressesTuple = ["김고은", "박소담", "전여빈"] as const;
const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const;

let stringArray: string[] = [...actressesTuple, ...actressesTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["코드팩토리", 32];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ["장원영", "안유진"];

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;
// array 안에 몇개의 요소가 들어있을지 모르므로 반대로 값을 할당하는건 불가하다.

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
  ["코드팩토리", 32],
  ["아이유", 31],
  ["김고은", 30],
];
