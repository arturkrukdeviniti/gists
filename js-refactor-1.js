const people = [
  { id: 1, firstName: 'Jan', lastName: 'Kowalski' },
  { id: 2, firstName: 'Grzegorz', lastName: 'Brzęsczykiewicz' },
  { id: 3, firstName: 'Andrzej', lastName: 'Morawski' },
]

const peopleIds = people.reduce((acc, curr) => {
  return [...acc, curr.id]
}, []);

expect(peopleIds).toStrictEqual([1, 2, 3]);
