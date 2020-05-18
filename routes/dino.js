import { Router } from 'https://deno.land/x/oak/mod.ts'
import { fetchAllDino, fetchOneDino, amountDino} from '../controllers/dino.js'

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router
    .get('/dinos', fetchAllDino)
    .get('/dino/:name', fetchOneDino)
    .get('/dinos/count', amountDino)

export default router