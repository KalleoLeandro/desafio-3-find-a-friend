import fastify from "fastify";
import { ZodError } from 'zod';
import { env } from "./env";
import { orgRoutes } from "./routes/org-routes";
import fastifyJwt from "@fastify/jwt";
import { petRoutes } from "./routes/pet-routes";
import { ownerRoutes } from "./routes/ownerRoutes";
import fastifyCookie from "@fastify/cookie";


export const app = fastify();

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName: 'refreshToken',
        signed: false
    },
    sign: {
        expiresIn: '10m'
    }
});

app.register(fastifyCookie);

app.register(orgRoutes, { prefix: '/orgs'});
app.register(petRoutes,{ prefix: '/pets'} );
app.register(ownerRoutes, {prefix: '/owner'});

app.setErrorHandler((error, request, reply) =>{
    if(error instanceof ZodError){
        return reply.status(400).send({message: "Validation error", issues: error.format()});
    }

    if(env.NODE_ENV !== 'production'){
        console.error(error);
    } else {
        
    }
    
    return reply.status(500).send({message: "Internal server error"});
})


