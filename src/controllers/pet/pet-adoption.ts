import { AdoptionPetFactory } from "@/factories/pet/adoption";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function adoption(request: FastifyRequest, reply: FastifyReply) {

    const adoptionPetBodySchema = z.object({
        user_id: z.string(),
        pet_id: z.string()
    });

    const { user_id, pet_id } = adoptionPetBodySchema.parse(request.query);

    const adoptionPetService = AdoptionPetFactory();

    const message = await adoptionPetService.execute({
        user_id, 
        pet_id
    });

    return reply.status(201).send(message);
};