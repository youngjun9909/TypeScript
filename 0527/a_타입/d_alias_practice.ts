// i_alias_practice.ts

{
  //! 문제 1: 타입 어노테이션 사용
  // 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
  // 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
  // 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
  let age: number;
  let isStudent: boolean;
  age = 26;
  isStudent = true;

  console.log(`Age: ${age}, IsStudent: ${isStudent}`);


  //! 문제 2: 타입 별칭 사용
  // ProductType이라는 타입 별칭을 생성
  // 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함
  // ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
  // product 객체의 내용을 콘솔에 출력
  type ProductType = {
    id: string;
    name: string;
    price: number;
  }

  const product : ProductType = {
    id: 'p1',
    name: 'Note',
    price: 900
  }
  console.log(product);
}