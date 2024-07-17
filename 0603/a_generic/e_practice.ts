// e_practice.ts
{
  //! 제네릭, 클래스, 배열 메서드를 활용한 회원 관리 프로그램 구현
  
  // 요구사항 정리(비즈니스 로직)
  
  //? 회원 정보
  // : name(이름), age(나이), active(활성 상태)의 속성을 가짐
  // - active 속성은 기본값으로 true값을 가짐(회원이 기본적으로 활성 상태)
  
  //? 회원 관리 프로그램
  // : 회원을 추가(addMember)
  // : 회원을 검색(findMember)
  // : 회원을 제거(removeMember)
  // : 활성화된 회원만 필터링(filterActiveMember)
  
  // - 기능 추가
  // 1. Member 클래스 확장
  // : Member 클래스를 상속받는 VIPMember 클래스를 정의
  // - rewardPoints(보상점수) 속성을 가짐
  //   : 생성자를 통해 초기화 가능 (Member 클래스의 속성은 super())
  
  // 2. 회원 나이 평균 계산하기
  // : Membership 클래스에 getAverageAge 메서드를 추가
  // - 현재 목록에 있는 모든 회원들의 나이 평균을 계산하여 반환
  
  // 3. 비활성 회원 검색 기능을 추가
  // : Membership 클래스에 filterInactiveMembers 메서드를 추가
  // - 활성 상태가 아닌(active 속성값이 false) 회원들만 필터링하여 반환
  
  class Member {
    constructor(
      public name: string,
      public age: number,
      public active: boolean = true,
    ) {}
  }

  //! Member 클래스를 상속받는 VIPMember 클래스 정의
  class VIPMember extends Member {
    constructor (name: string,age: number,active: boolean = true,public rewardPoints: number,){
        super(name,age,active)
        this.rewardPoints = rewardPoints;
      };

  }

  class Membership<T extends Member> {
    private members: T[] = [];

    addMember(member: T) {
      this.members.push(member);
    }

    findMember(name: string): T | undefined {
      return this.members.find(member => member.name === name);
    }

    removeMember(name: string): void {
      const index = this.members.findIndex(member => member.name === name);

      if(index !== -1) {
        this.members.splice(index, 1);
      }
    }

    filterActiveMembers(): T[] {
      return this.members.filter(member => member.active);
    }

    //! 비활성 상태인 회원들만 필터링해서 반환하는 메서드
      // 3. 비활성 회원 검색 기능을 추가
  // : Membership 클래스에 filterInactiveMembers 메서드를 추가
  // - 활성 상태가 아닌(active 속성값이 false) 회원들만 필터링하여 반환
    filterInactiveMembers(): T[] {
      return this.members.filter(member => !member.active);
    }

    //! 회원 나이 평균계산 메서드
      // 2. 회원 나이 평균 계산하기
  // : Membership 클래스에 getAverageAge 메서드를 추가
  // - 현재 목록에 있는 모든 회원들의 나이 평균을 계산하여 반환
    getAverageAge() {
      if(this.members.length === 0) return 0;

      const totalAge = this.members.reduce((acc, member) => acc + member.age, 0);

      return totalAge / this.members.length;
    }
  }

//! MemberShip 사용 예제
  let membership = new Membership<Member>();

  let memberA = new Member('박영준', 26);
  membership.addMember(memberA)
  membership.addMember(new Member('홍길동', 30, false));
  membership.addMember(new Member('전우치', 28));
  membership.addMember(new Member('신짱구', 27, false));

  console.log(membership.findMember('박영준'));
  console.log(membership.findMember('전우치'));

  let activeMembers = membership.filterActiveMembers();
  console.log(activeMembers);

  membership.removeMember('홍길동');
  console.log(membership.findMember('홍길동'));


  }