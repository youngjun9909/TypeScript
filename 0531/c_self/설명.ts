/*
# 프로젝트 1: 도서 관리 시스템

도서관이나 개인 책장을 관리하기 위한 웹 애플리케이션
: 사용자는 책을 추가, 수정, 삭제할 수 있고, 책의 상세 정보를 조회 가능

! 요구사항
사용자는 책의 제목, 저자, 출판일, 장르 등의 정보를 입력하여 책을 추가 가능

- 책 목록에서 특정 책을 검색할 수 있는 기능 필요
- 각 책에 대한 상세 정보 페이지 존재
- 사용자는 책의 정보를 수정하거나 삭제 가능

? 주요 로직
도서 추가: 사용자 입력을 받아 새 도서 객체를 생성하고 데이터베이스에 저장
도서 검색: 사용자가 입력한 검색어를 기반으로 도서 목록에서 해당하는 항목을 찾아 결과를 표시
도서 정보 조회: 사용자가 선택한 도서의 상세 정보를 데이터베이스에서 가져와 보여줌
도서 수정/삭제: 선택된 도서의 정보를 수정하거나 데이터베이스에서 삭제

# 프로젝트 2: 온라인 투표 시스템

온라인에서 사용할 수 있는 투표 시스템으로
: 관리자는 투표를 생성하고, 사용자는 로그인 후 투표에 참여 가능

! 요구사항
- 사용자는 시스템에 로그인해야 투표에 참여 가능
- 관리자는 투표를 생성하고, 투표 종료 날짜를 설정
- 사용자는 다양한 투표에 참여하고 결과를 조회 가능
- 투표가 종료되면, 결과는 모든 사용자에게 공개

? 주요 로직
투표 생성: 관리자가 투표 제목, 옵션, 종료 날짜를 설정하여 생성
투표 참여: 로그인한 사용자가 투표 옵션 중 하나를 선택하고 투표
결과 처리: 투표 종료 후, 시스템은 자동으로 투표 결과를 집계하고 공개
보안 로직: 사용자 인증과 데이터 검증을 통해 보안을 유지


# 프로젝트 3: 식당 예약 시스템

사용자가 온라인으로 식당을 검색하고 예약할 수 있는 시스템
: 식당 관리자는 예약 가능 시간과 테이블을 설정 가능

! 요구사항
- 사용자는 식당을 검색하고, 사용 가능한 예약 시간 확인 가능
- 사용자는 원하는 시간에 예약을 할 수 있어야 하며 예약 변경 및 취소 가능
- 식당 관리자는 예약 가능 시간과 테이블 배치를 관리 가능
- 시스템은 예약 중복을 방지

? 주요 로직
예약 가능 시간 조회: 사용자가 선택한 식당의 예약 가능 시간을 데이터베이스에서 조회
예약 처리: 사용자가 선택한 시간에 대해 예약을 생성하며, 중복 예약을 체크
예약 변경/취소: 사용자가 예약을 변경하거나 취소할 때, 시스템은 이를 처리하고 필요한 경우 알림을 전송
식당 관리자 인터페이스: 식당 관리자가 예약 가능 시간과 테이블 배치를 업데이트할 수 있는 인터페이스를 제공
*/