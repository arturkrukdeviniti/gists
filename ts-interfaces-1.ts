interface Person {
  id: number,
  firstName: string,
  lastName: string
}

interface Person {
  age: number
}

const person: Person = {
  id: 1,
  firstName: 'Jan',
  lastName: 'Kowalski'
}

console.log('Person', person);
