// 배열의 구조 분해 할당.
let arr = [1, 2, 3]
let [one, two, three] = arr
let [one2, two2] = arr
let [one3, two3, three3, four] = arr // four = undefined

console.log(one, two, three)
// 객체의 구조 분해 할당
let person = {
  name: '이정환',
  age: 27,
  hobby: '테니스'
}

let { name, age, hobby } = person
let { name2: myName, age2, hobby2, extra = 'hello' } = person

// 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra)
}

func(person)
