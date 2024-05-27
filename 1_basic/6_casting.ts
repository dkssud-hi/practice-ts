/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 * casting을 남발하면 말도안되는 타입을 캐스팅해줘도 에러가 나지 않기 때문에
 * 주의해서 꼭 필요할 때에만 사용해야한다.
 */
let codefactory = "code factory";
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;

// 이처럼 5를 할당해줌에도 불구하고 string타입으로 캐스팅이 되며 타입 유추 또한 string으로 된다.
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));

let number = 5;

console.log((number as any).toUpperCase());
