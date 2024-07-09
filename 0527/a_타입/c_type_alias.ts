// h_type_alias.ts

{
  //! 타입 어노테이션(Type Annotation)
  // : 변수, 함수의 매개변수, 함수의 반환값 등에 사용
  // : 해당 식별자(변수명)의 타입을 명시적으로 선언
  // >> 보통 식별자 뒤에 콜론을 사용하여 직접 명시

  let number;
  let anyNumber: any;
  // : any 타입의 변수로 명시하지 않은 경우 값을 할당할 때마다 해당 값의 타입의 변수로 재지정

  // 변수에 초기화가 되는 경우
  number = 123.456;
  anyNumber = 123.789;
  console.log(number.toFixed(2));
  console.log(anyNumber.toFixed(2));

  number = '전화번호';
  anyNumber = '전화번호';
  // console.log(number.toFixed(2)); - error

  //! 2. 타입 별칭 (Type Alias)
  // : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
  // : 코드의 가독성과 재사용성을 향상
  // : 타입 별칭은 대문자로 시작!

  //? 기본 사용 방법
  // : type 키워드를 사용하여 정의
  // type 타입별칭(대문자 키워드) = 타입;

  // 1. 변수 타입 별칭
  // : 변수의 경우 별칭 사용을 거의 하지 X
  type Text = string;
  let message: Text = '텍스트 메시지';
  let message2: Text = '텍스트 메시지2';

  // 2. 객체 타입 별칭
  // : 타입 별칭 내에서도 선택적 프로퍼티와 읽기 전용 속성 사용 가능
  // - 타입 별칭 명 지정 시 테이터 변수명+Type 주로 사용

  type userType = { // 콜론이 아닌 = (할당 연산자) 사용하여 타입의 참조를 할당
    name?: string;
    readonly height: number;
  }

  const user1: userType = {
    // name: '박영준',
    height: 179
  }
  const user2: userType = {
    name: '홍길동',
    height: 170
  }
  // user2.height = 167; - error

  // 3. 함수 타입 별칭
  // : User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
  type User = {
    id: string;
    name: string;
  }

  type ValidateUserType = (user: User) => boolean;

  // 사용가 입력되었을 때
  // , 사용자의 아이디가 null인 경우(입력하지 않은 경우) false
  // , 사용자의 아이디가 입력된 경우 true
  const isValidUser: ValidateUserType = (user) => user.id !== '';

  let userA: User = {
    id: 'qwer',
    name: '박영준'
  }

  let userB: User = {
    id: '',
    name: '박영준'
  }
console.log(isValidUser(userA)); // true
console.log(isValidUser(userB)); // false

type VoidReturnType = (x: number) => void;

const add:VoidReturnType = (x) => {
  console.log(x + x);
  
}
add(24);
  // 함수 사용

  //! 함수 타입 별칭 예제
  // 1. 함수 타입 별칭 정의
  type GreetFunction = (name: string) => string;

  // 2. 위의 타입 별칭을 사용하는 함수 구현
  const greet : GreetFunction= (name) => {
    return `hello, ${name}`;
  }

  // 3. 다른 함수에서 동일한 타입 별칭 사용
  function greet2(name: string): string {
    return `hello, ${name}`;
  }
  // 4. 함수 사용
  console.log(greet('박영준'));
  console.log(greet2('홍길동'));
}