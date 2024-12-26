// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'blank'
}

animal.age = 2 // 추가
animal.name = '까망이' // 수정
delete animal.color // 삭제

console.log(animal)

// 2. 메소드
// 값이 함수인 프로퍼티를 말함.

const person = {
  name: '이정환',
  // 메소드 선언
  sayHi() {
    console.log('선언!')
  }
}

person.sayHi()
person['sayHi']()
