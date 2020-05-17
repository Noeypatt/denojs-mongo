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
        context.response.body = dogs
    })
    .get('/dog/:name', context => {
        const name = context.params.name
        const dog = dogs.filter((dog) => dog.name === name)

        if (dog.length > 0) {
            context.response.body = dog
        }
        else {
            context.response.body = `${name} Not found`
        }

    })




const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


