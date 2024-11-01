import { InvalidCredentialsError } from "@/errors/invalid-credentials-error";
import { authenticateOrgFactory } from "@/factories/org/authenticate";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const createOrgBodySchema = z.object({
        email: z.string(),
        password: z.string(),
    });

    const {
        email,
        password } = createOrgBodySchema.parse(request.body);

    try {
        const authenticateOrgService = authenticateOrgFactory();

        const { org } = await authenticateOrgService.execute({ email, password });

        const token = await reply.jwtSign({
            role: org.role
        },
            {

                sign: {
                    sub: org.id
                }
            });

        const refreshToken = await reply.jwtSign({
            role: org.role
        },
            {
                sign: {
                    sub: org.id,
                    expiresIn: '7d'
                }
            });

        return reply
            .setCookie('refreshToken', refreshToken, {
                path: '/',
                secure: true,
                sameSite: true,
                httpOnly: true
            })
            .status(200)
            .send({ token });

    } catch (err) {
        if (err instanceof InvalidCredentialsError) {
            return reply.status(401).send({ message: err.message });
        }

        throw err;
    }
};