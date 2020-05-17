import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = env.HOST || '127.0.0.1'

const router = new Router();

router.get('/', context => {
    context.response.body = "Hello Deno 🦕"
})

router.post('/', context => {
    context.response.body = "POST request"
})

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

const server = app.listen("127.0.0.1:5000");
console.log("http://127.0.0.1:5000");
