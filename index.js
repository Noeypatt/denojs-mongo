import { Application } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/dotenv/load.ts";
import routerDog from './routes/dogs.js'

const env = Deno.env.toObject()
const PORT = env.PORT || 8000
const HOST = env.HOST || '127.0.0.1'

const app = new Application();
app.use(routerDog.routes())
app.use(routerDog.allowedMethods())

app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


