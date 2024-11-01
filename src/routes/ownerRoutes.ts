import { create } from "@/controllers/owner/create";
import { FastifyInstance } from "fastify";

export async function ownerRoutes(app: FastifyInstance) {
    app.post('/create', create);    
}