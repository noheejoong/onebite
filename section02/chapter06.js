let arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
}

// for of 반복문
for (let item of arr) {
  //   console.log(item)
}

// 객체 순회
let person = {
  name: '이정환',
  age: 27,
  hobby: '테니스'
}

// Object.keys 사용
let keys = Object.keys(person)
for (let i = 0; i < keys.length; i++) {
  //   console.log(keys[i])
}

for (let key of keys) {
  const value = person[key]
  //   console.log(key, value)
}

// Object.values 사용
let values = Object.values(person)
// console.log(values)
for (let value of values) {
  //   console.log(value)
}

for (let key in person) {
  const value = person[key]
  console.log(key, value)
}
