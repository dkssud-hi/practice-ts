/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 * type키워드를 통해 원하는 타입을 지정해줄 수 있다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

//특정 값 자체를 타입으로 지정해줄 수 도 있다.
type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year?: number; // ? 키워드를 통해 객체 프로퍼티의 값을 옵셔널하게 바꿔줄 수 도 있다.
};

const yuJin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 * Interface 키워드는 type키워드의 단점을 보완하기 위해 나왔다.
 * 기본적으로 원시타입을 제외한 객체,함수 타입만 지정할 수 있다.
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: "안유진",
  // year: 2002,
};
