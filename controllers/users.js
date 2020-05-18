import { Dog } from '../config/db.js'

export const fetchAllDogs = async context => {
    try {
        const dog = await Dog.find();
        if (dog) {
            context.response.body = dog;
            context.response.status = 200;
        } else {
            context.response.body = { message: '204: No Content' };
            context.response.status = 204;
        }
    }
    catch (err) {
        context.response.body = { message: '404: Not Found' };
        context.response.status = 404
        console.log(err);
    }
}

export const fetchOneDog = async context => {
    try {
        let name = context.params.name;

        const dog = await Dog.findOne({ name: name });
        if (dog) {
            context.response.body = dog;
            context.response.status = 200;
        } else {
            context.response.body = { message: '204: No Content' };
            context.response.status = 204;
        }
    }
    catch (err) {
        context.response.body = { message: '404: Not Found' };
        context.response.status = 404
        console.log(err);
    }
}

export const amountDog = async context => {
    try {
        const dog = await Dog.count();
        if (dog) {
            context.response.body = { Total: dog }
            context.response.status = 200;
        } else {
            context.response.body = { message: '204: No Content' };
            context.response.status = 204;
        }

    } catch (err) {
        context.response.body = { message: '500: Internal Server Error' }
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

        context.response.body = { message: 'Create Success' };
        context.response.status = 201;

    } catch (err) {
        context.response.body = { message: '500: Internal Server Error' }
        context.response.status = 500;
        console.log(err);
    }
}

export const createDogs = async context => {
    try {
        const body = await context.request.body()
        const item = body.value

        const dog = await Dog.insertMany(
            [
                {
                    name: item[0].name,
                    age: item[0].age
                },
                {
                    name: item[1].name,
                    age: item[1].age
                }
            ]
        )

        context.response.body = { message: 'Create Success' }
        context.response.status = 201

    } catch (err) {
        context.response.body = { message: '500: Internal Server Error' }
        context.response.status = 500
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
        context.response.body = { message: 'Update Success' }
        context.response.status = 201

    } catch (err) {
        context.response.body = { message: '500: Internal Server Error' }
        context.response.status = 500
        console.log(err);
    }
}

export const deleteDog = async context => {
    try {
        const name = context.params.name
        const result = await Dog.deleteOne({ name: name })

        context.response.body = result ? "Delete Success" : "500: Internal Server Error"
        context.response.status = result ? 201 : 500


    } catch (err) {
        context.response.body = { message: '500: Internal Server Error' }
        context.response.status = 500
        console.log(err);
    }
}