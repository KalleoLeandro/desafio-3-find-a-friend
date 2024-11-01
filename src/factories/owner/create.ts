import { PrismaAddressRepository } from "@/repositories/prisma/prisma-address-repository";
import { PrismaOwnerRepository } from "@/repositories/prisma/prisma-owner-repository";
import { CreateOwnerService } from "@/services/owner/create";

export function createOwnerFactory() {    
    const prismaOwnerRepository = new PrismaOwnerRepository();
    const prismaAddressRepository = new PrismaAddressRepository();

    const createOwnerService = new CreateOwnerService(prismaOwnerRepository, prismaAddressRepository);

    return createOwnerService;
}