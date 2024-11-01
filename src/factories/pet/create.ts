import { PrismaAddressRepository } from "@/repositories/prisma/prisma-address-repository";
import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { CreateOrgService } from "@/services/org/create";
import { CreatePetService } from "@/services/pet/create";

export function createPetFactory() {
    const prismaPetRepository = new PrismaPetRepository();    

    const createPetService = new CreatePetService(prismaPetRepository);

    return createPetService;
}