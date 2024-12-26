//5가지 요소 순회 및 탐색 메서드
//1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1, 2, 3]

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2)
})

let doubledArr = []

arr1.forEach((item) => {
  doubledArr.push(item * 2)
})
// console.log(doubledArr)

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1, 2, 3]
let isInclude = arr2.includes(10)
// console.log(isInclude)

//3. indexOf
// 특정 요소의 인덱스를 찾아서 반환
let arr3 = [1, 2, 3]
let index = arr3.indexOf(2)
// console.log(index) // 1 출력

let arr4 = [2, 2, 2]
let index2 = arr4.indexOf(2)
// console.log(index2) // 0 출력

//4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메소드
let arr5 = [1, 2, 3]
const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true
})
let arr6 = [1, 2, 3]
const findedIndex2 = arr6.findIndex((item) => {
  if (item % 2 !== 0) return true
})

let arr7 = [1, 2, 3]
const findedIndex7 = arr7.findIndex((item) => item % 2 !== 0)

// console.log(findedIndex7)

let objectArr = [{ name: '이정환' }, { name: '홍길동' }]

// console.log(objectArr.indexOf({ name: '이정환' })) // indexOf로는 찾을 수 없다.

// console.log(objectArr.findIndex((item) => item.name === '홍길동')) // findIndex로 찾을 수 있다.

//5. find
// 모든 요소를 순회하면서 callback 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr8 = [{ name: '이정환' }, { name: '홍길동' }]

const found = arr8.find((item) => item.name === '이정환')
console.log(found)
