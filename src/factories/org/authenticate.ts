import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { AuthenticateOrgService } from "@/services/org/authenticate";

export function authenticateOrgFactory() {
    const prismaOrgRepository = new PrismaOrgRepository();    

    const authenticateOrgService = new AuthenticateOrgService(prismaOrgRepository);

    return authenticateOrgService;
}