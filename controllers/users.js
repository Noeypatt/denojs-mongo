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

export const fetchAllDogs = context => {
    context.response.status = 200
    context.response.body = dogs
}

export const fetchOneDog = context => {
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

export const createDog = async context => {
    const body = await context.request.body()
    const dog = body.value

    if (dog.name != undefined && !dog.age != undefined) {
        dogs.push(dog)
        context.response.body = { msg: 'Dog created!' }
        context.response.status = 200
    }
    else {
        context.response.body = { msg: 'Error' }
        context.response.status = 400
    }
}

export const updateDog = async context => {
    const name = context.params.name
    const temp = dogs.filter((dog) => dog.name === name)

    const body = await context.request.body()
    const dog = body.value

    if (temp.length) {
        temp[0].name = dog.name ? dog.name : temp[0].name
        temp[0].age = dog.age ? dog.age : temp[0].age

        context.response.body = { msg: 'Update!!!' }
        context.response.status = 200
    }

    else {
        context.response.status = 400
        context.response.body = { msg: `Cannot find dog name: ${name}` }
    }
}

export const deleteDog = async context => {
    const name = context.params.name
    const dog = dogs.filter((dog) => dog.name !== name)

    if (dog.length) {
        context.response.body = dog
        context.response.status = 200
    }

    else {
        context.response.status = 400
        context.response.body = { msg: `Cannot find dog name: ${name}` }
    }
}