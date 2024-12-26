// 1.Spread 연산자
// -> Spread : 흩뿌리다.

let arr1 = [1, 2, 3]
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]
let arr2 = [4, ...arr1, 5, 6]

let obj1 = {
  a: 1,
  b: 2
}

// let obj2 = {
//   c: 3,
//   d: 4
// }
let obj2 = {
  ...obj1,
  c: 3,
  d: 4
}

// console.log(obj2)

function funcA(p1, p2, p3) {
  //   console.log(p1, p2, p3)
}

funcA(...arr1)

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, ...rest) {
  console.log(rest)
}

funcB(...arr1)

// o1 === o2 참조값을 기준으로 비교 - 얕은 비교
// JSON.stringify(o1) === JSON.stringify(o2) 문자열로 변환 후 비교 - 깊은 비교
