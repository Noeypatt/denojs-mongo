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

export const fetchAllDog = (context) => {
    context.response.status = 200
    context.response.body = dogs
}

export const fetchOneDog = (context) => {
    const name = context.params.name
    const dog = dogs.filter((dog) => dog.name === name)

    if (dog.length > 0) {
        context.response.status = 200
        context.response.body = dog
    }
    else {
        context.response.status = 404
        context.response.body = { msg: `Cannot find dog name: ${name}` }
    }
}