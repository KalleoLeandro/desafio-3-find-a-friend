import { create } from "@/controllers/pet/create";
import { detais } from "@/controllers/pet/details";
import { listByCity } from "@/controllers/pet/list-by-city";
import { listBySize } from "@/controllers/pet/list-by-size";
import { listBySpecie } from "@/controllers/pet/list-by-specie";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function petRoutes(app: FastifyInstance) {
    app.post('/create', {onRequest: verifyJWT},create);
    app.get('/list-by-city', listByCity);
    app.get('/list-by-size', listBySize);
    app.get('/list-by-specie', listBySpecie);
    app.get('/details', detais);
}