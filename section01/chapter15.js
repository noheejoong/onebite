let obj1 = new Object() // 객체 생성자
let obj2 = {} // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: '이정환', // key : value
  age: 27,
  hobby: '테니스',
  job: 'FE developer',
  extra: {},
  10: 20,
  'like cat': true
}

let property = 'hobby'
let hobby = person[property]
console.log(hobby)

// 새로운 Property를 추가하는 방법
person.job = 'FE Developer'
person['favorte food'] = '떡볶이'

// 프로퍼티를 삭제하는 방법
delete person.job
delete person['favorte food']

// 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = 'name' in person // true
let result2 = 'cat' in person // false
console.log(result1)
