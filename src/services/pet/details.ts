import { PetRepository } from "@/interfaces/pet.-interface";
import { Pet } from "@prisma/client";

interface DetaislPetRequest {
    id: string
}

interface DetailsPetResponse {
    pet: Pet
}

export class DetailsPetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        id
    }: DetaislPetRequest): Promise<DetailsPetResponse> {

        const pet = await this.petRepository.findById(
            id
        );

        return { pet };
    }
}