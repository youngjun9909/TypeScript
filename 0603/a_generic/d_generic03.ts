// d_generic03.ts
{
  //! 유니온 타입과 제네릭
  
  // 유니온 타입: 여러 타입 중 하나가 될 수 있는 값을 의미

  function unionGeneric<T extends string | number>(value: T) {
    if(typeof value === 'string') {
      return value.toLowerCase()
    }
      return value;
    
  }
  const result1 = unionGeneric('String')
  const result2 = unionGeneric(3)
  console.log(result1);
  console.log(result2);
  
  //! 제네릭 유틸리티 타입
  // : 타입스크립트에 내장된 일련의 제네릭 타입
  // : 기존 타입을 변환하거나 조작하는데 사용
  
  // 1) Partial: 모든 속성을 선택적으로 만들어줌
  // 형태
  // : Partial<T>
  interface User {
    name: string;
    age: number
  }
  // 사용자 데이터 예시
  // : 사용자의 초기 데이터 지정 | 사용자 데이터 입력(생성)
  const users: {[key: number]: User} = {
    1: {name: '박영준', age: 26},
    2: {name: '홍길동', age: 35}
  }
  
  // 위의 사용자 데이터를 업데이트하는 함수 구현
  // 사용자의 id(key)값을 사용하여 name 또는 age의 값을 업데이트(수정)
  function updateUser(id: number, changes: Partial<User>) {
    const user = users[id]; // User 타입의 객체

    if(!user) {
      console.log(`${id}를 가진 사용자가 존재하지 않습니다.`);
    }
    
    // 변경 사항 적용
    // : 스프레드 연산자를 사용하여 해당 유저의 전체 데이터를 불러와
    // : changes 객체에 담긴 속성의 값을 새로고침(업데이트)
    // - 객체의 경우 키의 값이 중복되는 경우 뒤의 속성값으로 업데이트
    users[id] = { ...user, ...changes };
  }
  updateUser(1, {name: 'PYJ'});
  updateUser(2, {age: 56});
  updateUser(3, {name: '미상', age: 17}); // 3를 가진 사용자가 존재하지 않습니다.

  console.log(users[1]); // { name: 'PYJ', age: 26 }
  console.log(users[2]); // { name: '홍길동', age: 56 }
  console.log(users[3]); // { name: '미상', age: 17 }



  // 2) Readonly: 모든 속성을 읽기 전용 속성을 변경
  // 형태
  // : Readonly<T>
  interface Human {
    name: string;
    age: number;
  }

  let user: Readonly<Human> = { // 값의 변경을 허락하지 않는 유틸리티 타입
    name: '박영준',
    age: 26
  }
  // user.name = 'pyj' - Error
  
  //? 유니온 타입과 제네릭 함수 작성 예시
  // 문자열 배열과 숫자 배열 중 하나를 입력받아
  // , 배열의 첫 번째 요소를 반환하는 제네릭 함수 구현
  function getFirstElement<T extends string[] | number[]>(arr: T): string | number {
    if(typeof arr[0] === 'string') {
      return arr[0] as string;
    }else {
      return arr[0] as number;
    }
  }

  const firstString = getFirstElement(['apple', 'banana',' orange'])
  const firstNumber = getFirstElement([1, 2, 3])

  console.log(firstString);
  console.log(firstNumber);
}