const people = [
    { id: 1, firstName: 'Jan', lastName: 'Kowalski' },
    { id: 2, firstName: 'Grzegorz', lastName: 'Brzęsczykiewicz' },
    { id: 3, firstName: 'Andrzej', lastName: 'Morawski' },
]

const findByFirstName = async (firstName) => {
    // TODO: Implement here.
}

test('findByFirstName test', async () => {
    const matchedPeople = await findByFirstName('Jan')
    expect(matchedPeople).toEqual([people[0]])
})
