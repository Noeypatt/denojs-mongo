import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/dotenv/load.ts";

const env = Deno.env.toObject()
const PORT = env.PORT || 8000
const HOST = env.HOST || '127.0.0.1'

let dogs = [
    {
        name: 'Roger',
        age: 8,
    },
    {
        name: 'Syd',
        age: 7,
    },
]

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router
    .get('/dogs', context => {

        context.response.status = 200
        context.response.body = dogs

    })
    .get('/dog/:name', context => {
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

    })
    .post('/dogs', async context => {

        const body = await context.request.body()
        const dog = body.value

        if (dog.name != undefined  && !dog.age != undefined) {
            dogs.push(dog)
            context.response.body = { msg: 'Dog created!' }
            context.response.status = 200
        }
        else{
            context.response.body = { msg: 'Error' }
            context.response.status = 400
        }

    })


const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


