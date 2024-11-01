import { PrismaAddressRepository } from "@/repositories/prisma/prisma-address-repository";
import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { CreateOrgService } from "@/services/org/create";

export function createOrgFactory() {
    const prismaOrgRepository = new PrismaOrgRepository();
    const prismaAddressRepository = new PrismaAddressRepository();

    const createOrgService = new CreateOrgService(prismaOrgRepository, prismaAddressRepository);

    return createOrgService;
}