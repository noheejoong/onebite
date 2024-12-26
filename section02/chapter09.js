// 5가지 배열 변형 메소드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열을 반환

let arr1 = [
  { name: '이정환', hobby: '테니스' },
  { name: '김효빈', hobby: '테니스' },
  { name: '홍길동', hobby: '독서' }
]

const tennisPeople = arr1.filter((item) => item.hobby === '테니스')

// console.log(tennisPeople)

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모은 새로운 배열로 반환
let arr2 = [1, 2, 3]
const mapResult1 = arr2.map((item, idx, arr) => {
  //   console.log(idx, item)
  return item * 2
})

let names = arr1.map((item) => item.name)

// 3. sort
// 배열을 사전 순으로 정렬하는 메소드
// let arr3 = ['b', 'a', 'c']
let arr3 = [10, 3, 5]
// 오름차순 예제
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 오라
    return 1 // b, a 배치
  } else if (a < b) {
    // a 가 b 앞에 와라
    return -1 // a, b 배치
  } else {
    return 0 // 위치를 바꾸지 않음
  }
})
//내림차순 예제
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 오라
    return -1 // b, a 배치
  } else if (a < b) {
    // a 가 b 앞에 와라
    return 1 // a, b 배치
  } else {
    return 0 // 위치를 바꾸지 않음
  }
})

//4. toSorted
// 정렬된 새로운 배열을 반환하는 메소드
let arr5 = ['c', 'a', 'b']
const sorted = arr5.toSorted()
// console.log(arr5)
// console.log(sorted)

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr6 = ['hi', 'im', 'winterlood']
let joined = arr6.join('aa')
console.log(joined)
