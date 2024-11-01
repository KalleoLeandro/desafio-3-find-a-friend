import { createOrgFactory } from "@/factories/org/create";
import { Role } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createOrgBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        wppNumber: z.string(),
        role: z.nativeEnum(Role).default(Role.MEMBER),
        org_address: z.object({
            zipCode: z.string(),
            street: z.string(),
            nro: z.number(),
            district: z.string(),
            city: z.string(),
            state: z.string()
        })
    });

    const { name,
        email,
        password,
        wppNumber,
        role,
        org_address } = createOrgBodySchema.parse(request.body);

    const createOrgService = createOrgFactory();

    await createOrgService.execute({
        name,
        email,
        password,
        wppNumber,
        role,
        org_address
    });

    return reply.status(201).send();
};