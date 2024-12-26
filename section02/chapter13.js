// const promise = new Promise((resolve, reject) => {
//   //비동기 작업 실행하는 함수
//   //executor
//   setTimeout(() => {
//     console.log('안녕')
//     reject('왜 실패한지 이우...') //Promise 결과값.
//   }, 2000)
// })

// setTimeout(() => {
//   console.log(promise)
// }, 3000)

// const promise = new Promise((resolve, reject) => {
//   //비동기 작업 실행하는 함수
//   //executor
//   setTimeout(() => {
//     const num = null
//     if (typeof num === 'number') {
//       resolve(num + 10)
//     } else {
//       reject('num이 숫자가 아닙니다.') //Promise 결과값.
//     }
//   }, 2000)
// })

// // then 메소드
// // -> 그 후에
// // Promise chaining
// promise
//   .then((value) => {
//     console.log(value)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10)
      } else {
        reject('num이 숫자가 아닙니다.') //Promise 결과값.
      }
    }, 2000)
  })
  return promise
}

const p = add10(0)

// p.then((result) => {
//   console.log(result)

//   const newP = add10(result)
//   newP.then((result) => {
//     console.log(result)
//   })
// }).catch((error) => {
//   console.log(error)
// })

p.then((result) => {
  console.log(result)

  return add10(result)
})
  .then((result) => {
    console.log(result)
    return add10(null)
  })
  .then((result) => {
    console.log(result)
    return add10(result)
  })
  .catch((error) => {
    console.log(error)
  })
