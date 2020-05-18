import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";


const env = Deno.env.toObject()
const DB_NAME = env.DB_NAME || "deno_dino"
const DB_HOST_URL = env.DB_HOST_URL || 'mongodb://localhost:27017'

await init()

const client = new MongoClient();
client.connectWithUri(DB_HOST_URL);

const db = client.database(DB_NAME);

export const Dinosaur = db.collection("dinosaur");
