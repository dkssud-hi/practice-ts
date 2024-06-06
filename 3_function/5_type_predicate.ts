/**
 * Type Predicate
 * 타입을 정확히 판별하기 위해 쓴다.
 * 내로잉을 더 정확히 할 수 있다.
 * instanceOf나 typeof로도 타입 체크를 할 수 있지만
 * 가독성과 유연함에서 훨씬 좋고 타입스크립트에서도 Type Predicate를 활용하여
 * 타입 가드를 할 것을 권장한다.
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;

if (isNumberRetBool(number)) {
  number;
}

if (isNumber(number)) {
  number;
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 32,
      }
    : {
        name: "오리",
        breed: "코리안 길냥이",
      };

if (isDoge(doge)) {
  doge;
} else {
  doge;
}

interface student {
  age: number;
  school: string;
}

interface colleageStudent {
  age: number;
  colleage: string;
}
type colleageOrStudent = student | colleageStudent;

function isColleage(student: colleageOrStudent): boolean {
  return (student as colleageStudent).colleage !== undefined;
}

const student: colleageOrStudent =
  Math.random() > 0.5
    ? {
        age: 19,
        school: "함현고",
      }
    : {
        age: 25,
        colleage: "협성대",
      };

if (isColleage(student)) {
  student;
}

function isNumber2(number: any): number is number {
  return typeof number === "number";
}

const testNum = Math.random() > 0.5 ? 5 : "5";

//아래처럼 조건문 등을 통해 티입을 내로잉하는 것을 타입 가드라 하는데 의도한대로 타입별로 동작하게 한다.
if (isNumber2(testNum)) {
  testNum;
} else {
  testNum;
}
