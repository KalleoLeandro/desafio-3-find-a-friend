import { PetRepository } from "@/interfaces/pet.-interface";
import { Pet } from "@prisma/client";

interface ListBySpeciePetRequest {
    specie: string
}

interface ListBySpeciePetResponse {
    pets: Pet[]
}

export class ListBySpeciePetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        specie
    }: ListBySpeciePetRequest): Promise<ListBySpeciePetResponse> {

        const pets = await this.petRepository.findBySpecie(
            specie
        );

        return { pets };
    }
}