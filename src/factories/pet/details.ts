import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { DetailsPetService } from "@/services/pet/details";

export function detailsPetFactory() {
    const prismaPetRepository = new PrismaPetRepository();    

    const detaislPetService = new DetailsPetService(prismaPetRepository);

    return detaislPetService;
}