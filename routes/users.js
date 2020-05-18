import { Router } from 'https://deno.land/x/oak/mod.ts'
import { fetchAllDogs, fetchOneDog, amountDog, createDog, createDogs, updateDog, deleteDog } from '../controllers/users.js'

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router
    .get('/dogs', fetchAllDogs)
    .get('/dog/:name', fetchOneDog)
    .get('/dogs/count', amountDog)
    .post('/dog', createDog)
    .post('/dogs', createDogs)
    .put('/dog/:name', updateDog)
    .delete('/dog/:name', deleteDog)


export default router