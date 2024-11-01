import { listBySizePetFactory } from "@/factories/pet/list-by-size";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function listBySize(request: FastifyRequest, reply: FastifyReply) {
    const listBySizePetQuerySchema = z.object({
        minSize: z.coerce.number(),
        maxSize: z.coerce.number()
    });

    const { minSize, maxSize } = listBySizePetQuerySchema.parse(request.query);

    const listBySizePetService = listBySizePetFactory();

    const pets = await listBySizePetService.execute({
        minSize, maxSize
    });

    return reply.status(201).send(pets);
};