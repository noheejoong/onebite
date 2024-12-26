function returnTrue() {
  return true
}
function returnFalse() {
  return false
}
// 단락 평가 활용 사례
function printName(person) {
  if (!person) {
    console.log('person 에 값이 없음')
    return
  }
  console.log(person)
}

function printName2(person) {
  console.log(person && person.name)
}

function printName3(person) {
  const name = person && person.name
  console.log(name || 'person에 값이 없음')
}

let person = { name: '이정환' }
printName2(person)

// Truthy1 && Truthy2 => Truthy2
// Truthy1 || Truthy2 => Truthy1
