import { PetRepository } from "@/interfaces/pet.-interface";
import { Pet } from "@prisma/client";

interface ListByCityPetRequest {
    city: string
}

interface ListByCityPetResponse {
    pets: Pet[]
}

export class ListByCityPetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        city
    }: ListByCityPetRequest): Promise<ListByCityPetResponse> {

        const pets = await this.petRepository.findByCity(
            city
        );

        return { pets };
    }
}