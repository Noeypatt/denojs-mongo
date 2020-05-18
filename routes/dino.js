import { Router } from 'https://deno.land/x/oak/mod.ts'
import { fetchAllDino, createDino, updateDino, deleteDino } from '../controllers/dino.js'

const routerDino = new Router();

routerDino.get('/deno', context => {
    context.response.body = "Hello Deno 🦕"
})

routerDino
    .get('/dinos', fetchAllDino)
    .post('/dino', createDino)
    .put('/dino/:name', updateDino)
    .delete('/dino/:name', deleteDino)

export default routerDino