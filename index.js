import { Application } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import "https://deno.land/x/denv/mod.ts";

import {
  fetchAllEmployees,
}
  from "./controllers/users.js";

const app = new Application();

app.get("/users", fetchAllEmployees)
  .start({ port: 5000 });

console.log(`server listening on http://localhost:5000`);