import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/dotenv/load.ts";
import { fetchAllDogs, fetchOneDog, createDog, updateDog } from './controllers/users.js'

const env = Deno.env.toObject()
const PORT = env.PORT || 8000
const HOST = env.HOST || '127.0.0.1'

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router
    .get('/dogs', fetchAllDogs)
    .get('/dog/:name', fetchOneDog)
    .post('/dogs', createDog)
    .put('/dog/:name', updateDog)

    .delete('/dog/:name', async context => {
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

    })


const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


