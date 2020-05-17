let dogs = [
    {
        name: 'Roger',
        age: 8,
    },
    {
        name: 'Syd',
        age: 7,
    },
    {
        name: 'Kiki',
        age: 3,
    },
]

export const fetchAllEmployees = (context) => {
    context.response.status = 200
    context.response.body = dogs
}
