import { Router } from 'https://deno.land/x/oak/mod.ts'
import { fetchAllDino, createDino, updateDino, deleteDino } from '../controllers/dino.js'

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router
    .get('/dinos', fetchAllDino)
    .post('/dino', createDino)
    .put('/dino/:name', updateDino)
    .delete('/dino/:name', updateDino)

export default router