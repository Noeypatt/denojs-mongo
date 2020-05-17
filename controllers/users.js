import { Dog } from '../config/db.js'

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

    try {
        const body = await context.request.body()
        const { name, age } = body.value

        const id = await Dog.insertOne({
            name: name,
            age: age
        })

        context.response.body = id;
        context.response.status = 201;

    } catch (err) {
        context.response.body = { msg: 'Error' }
        context.response.status = 500;
        console.log(e);
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