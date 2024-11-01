import { authenticate } from "@/controllers/org/authenticate";
import { create } from "@/controllers/org/create";
import { adoption } from "@/controllers/pet/pet-adoption";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";


export async function orgRoutes(app: FastifyInstance) {
    app.post('/create', create);
    app.post('/authenticate', authenticate);
    app.put('/adoption', { onRequest: verifyJWT}, adoption);
}