import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { ListByCityPetService } from "@/services/pet/list-by-city";

export function listByCityPetFactory() {
    const prismaPetRepository = new PrismaPetRepository();    

    const listByCityPetService = new ListByCityPetService(prismaPetRepository);

    return listByCityPetService;
}