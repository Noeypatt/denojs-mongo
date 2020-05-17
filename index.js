import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/dotenv/load.ts";
import { fetchAllDogs, fetchOneDog, createDog, updateDog, deleteDog } from './controllers/users.js'

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

    .delete('/dog/:name', deleteDog)

const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


