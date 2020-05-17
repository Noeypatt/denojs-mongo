import { Dog } from '../config/db.js'

export const fetchAllDogs = async context => {
    try {
        const data = await Dog.find();
        if (data) {
            context.response.body = data;
            context.response.status = 200;
        } else {
            context.response.body = "not found";
            context.response.status = 204;
        }
    }
    catch (err) {
        context.response.body = null;
        context.response.status = 500
        console.log(e);
    }
}

export const fetchOneDog = async context => {
    try {
        let name = context.params.name;

        const data = await Dog.findOne({ name: name });
        if (data) {
            context.response.body = data;
            context.response.status = 200;
        } else {
            context.response.body = "not found";
            context.response.status = 204;
        }
    }
    catch (err) {
        context.response.body = null;
        context.response.status = 500
        console.log(e);
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