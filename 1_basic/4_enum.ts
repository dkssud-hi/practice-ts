/**
 * Enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL - 초기 상태
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

console.log(runWork() === "DONNE");

const doneState = "DONE";
const loadingState = "LOADGNG";
const errorState = "ERROR";
const initialState = "INITIAL";

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    // 작업을 한다.

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);

enum State {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());

// enum을 이용해 작업 상태를 관리하면 오탈자로 인한 오류상황을 방지할 수 있고
// 유지/보수면에서 용이하다.

// enum 타입의 프로퍼티에 값을 지정할 수 있다. 만약 값을 지정하지 않는다면 0부터 순차적으로 값이 할당된다.
enum ImageLoadState {
  LOADING = "Load..",
  SUCCESS = "Load Image successful",
  ERROR = "이미지를 받아오는 과정에서 에러가 발생했습니다.",
  DONE = "통신을 마무리합니다.",
}

function LoadImage() {
  try {
    let state = ImageLoadState.LOADING;
    //이미지 로드중

    state = ImageLoadState.SUCCESS;
    console.log(state);
  } catch (error) {
    let state = ImageLoadState.ERROR;
  } finally {
    let state = ImageLoadState.DONE;
  }
}
