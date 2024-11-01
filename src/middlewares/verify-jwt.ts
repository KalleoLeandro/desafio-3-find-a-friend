import { FastifyReply, FastifyRequest } from "fastify";

export async function verifyJWT(
    request: FastifyRequest, reply: FastifyReply
) {
    try {
        console.log(request.headers.authorization);
        await request.jwtVerify();
    }
    catch (e) {        
        if(request.url.includes('adoption')){
            return reply.status(401).send({ message: 'Unauthorized, contact the Adoption Org using the whattsapp phone number'});
        }        
        return reply.status(401).send({ message: 'Unauthorized' });
    }
}