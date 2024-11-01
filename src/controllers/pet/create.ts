import { createPetFactory } from "@/factories/pet/create";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createPetBodySchema = z.object({
        name: z.string(),
        age: z.number().min(0),
        size: z.number().min(0.1),
        specie: z.string(),
        org_id: z.string()
    });

    const { name, age, size, specie, org_id } = createPetBodySchema.parse(request.body);

    const createPetService = createPetFactory();

    const pet = await createPetService.execute({
        name, age, size, specie, org_id
    });

    return reply.status(201).send(pet);
};