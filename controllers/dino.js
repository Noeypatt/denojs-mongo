import { Dinosaur } from '../config/db.dino.js';

export const fetchAllDino = ctx => {
    try {
        const data = Dinosaur.find()

        ctx.response.body = data
        ctx.response.status = 200
    } catch (err) {
        ctx.response.body = { msg: "404: Not Found" }
        ctx.response.status = 404
        console.log(err);

    }
}

export const createDino = async ctx => {

}

export const updateDino = async ctx => {

}

export const deleteDino = async ctx => {

}