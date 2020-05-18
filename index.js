import { Application } from 'https://deno.land/x/oak/mod.ts'
import "https://deno.land/x/dotenv/load.ts";
import router from './routes/dogs.js'

const env = Deno.env.toObject()
const PORT = env.PORT || 8000
const HOST = env.HOST || '127.0.0.1'

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(`${HOST}:${PORT}`);
console.log(`http://${HOST}:${PORT}`);


