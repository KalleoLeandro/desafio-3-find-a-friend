import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { AdoptionPetService } from "@/services/pet/adoption";

export function AdoptionPetFactory() {
    const prismaPetRepository = new PrismaPetRepository();     

    const adoptionPetService = new AdoptionPetService(prismaPetRepository);

    return adoptionPetService;
}