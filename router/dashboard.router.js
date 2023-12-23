import express from "express"; // "type": "module"
import { client } from "../index.js"

const router = express.Router()

router.post("/mobile", async function (request, response) {
    const result = request.body
    const data = await client
        .db("moblies")
        .collection("mobilelist")
        .insertOne(result)
    response.send(data)
})

router.get("/mobile", async function (request, response) {
    const detail = await client
        .db("moblies")
        .collection("mobilelist")
        .find({})
        .toArray();
    response.send(detail)
})

router.get("/mobile/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("moblies")
        .collection("mobilelist")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})



export default router