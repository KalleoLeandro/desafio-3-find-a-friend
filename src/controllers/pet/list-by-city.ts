import { listByCityPetFactory } from "@/factories/pet/list-by-city";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function listByCity(request: FastifyRequest, reply: FastifyReply) {
    const listByCityPetQuerySchema = z.object({
        city: z.string(),        
    });

    const { city } = listByCityPetQuerySchema.parse(request.query);

    const listByCityPetService = listByCityPetFactory();

    const pets = await listByCityPetService.execute({
        city
    });

    return reply.status(201).send(pets);
};