import { detailsPetFactory } from "@/factories/pet/details";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function detais(request: FastifyRequest, reply: FastifyReply) {
    const detaisPetQuerySchema = z.object({
        id: z.string(),        
    });

    const { id } = detaisPetQuerySchema.parse(request.query);

    const detaislPetService = detailsPetFactory();

    const pets = await detaislPetService.execute({
        id
    });

    return reply.status(201).send(pets);
};