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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
    }
}

export const updateDog = async context => {
    try {
        const nameDog = context.params.name
        let body = await context.request.body()
        const { name, age } = body.value
        const data = {}

        if (name) {
            data["name"] = name

        }
        if (age) {
            data["age"] = age
        }

        const result = await Dog.updateOne({ name: nameDog }, { $set: data })
        context.response.body = result
        context.response.status = 201

    } catch (err) {
        context.response.body = "not found";
        context.response.status = 404
    }
}

export const deleteDog = async context => {
    try {

        const name = context.params.name
        const result = await Dog.deleteOne({ name: name })

        context.response.body = result ? "Delete!!!" : "Dog not found"
        context.response.status = result ? 201 : 404


    } catch (err) {
        context.response.body = "not found";
        context.response.status = 404
    }
}