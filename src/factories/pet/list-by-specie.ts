import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { ListBySpeciePetService } from "@/services/pet/list-by-specie";

export function listBySpeciePetFactory() {
    const prismaPetRepository = new PrismaPetRepository();    

    const listBySpeciePetService = new ListBySpeciePetService(prismaPetRepository);

    return listBySpeciePetService;
}