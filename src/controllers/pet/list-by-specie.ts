import { listBySpeciePetFactory } from "@/factories/pet/list-by-specie";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function listBySpecie(request: FastifyRequest, reply: FastifyReply) {
    const listBySpeciePetQuerySchema = z.object({        
        specie: z.string()
    });

    const { specie } = listBySpeciePetQuerySchema.parse(request.query);

    const listBySpeciePetService = listBySpeciePetFactory();

    const pets = await listBySpeciePetService.execute({
        specie
    });

    return reply.status(201).send(pets);
};