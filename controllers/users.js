import {
    HandlerFunc,
    Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import db from "../config/db.js";

const database = db.getDatabase;
const employees = database.collection("employees");

