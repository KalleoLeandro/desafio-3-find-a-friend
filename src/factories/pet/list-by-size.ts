import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { ListBySizePetService } from "@/services/pet/list-by-size";

export function listBySizePetFactory() {
    const prismaPetRepository = new PrismaPetRepository();    

    const listBySizePetService = new ListBySizePetService(prismaPetRepository);

    return listBySizePetService;
}