import { createOwnerFactory } from "@/factories/owner/create";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createOwnerBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        owner_address: z.object({
            zipCode: z.string(),
            street: z.string(),
            nro: z.number(),
            district: z.string(),
            city: z.string(),
            state: z.string()
        })
    });

    const { name, email, phone, owner_address } = createOwnerBodySchema.parse(request.body);

    const createOwnerService = createOwnerFactory();

    const pet = await createOwnerService.execute({
        name, email, phone, owner_address
    });

    return reply.status(201).send(pet);
};