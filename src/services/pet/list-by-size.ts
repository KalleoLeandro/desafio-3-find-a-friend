import { PetRepository } from "@/interfaces/pet.-interface";
import { Pet } from "@prisma/client";

interface ListBySizePetRequest {
    minSize: number,
    maxSize: number
}

interface ListBySizePetResponse {
    pets: Pet[]
}

export class ListBySizePetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        minSize,
        maxSize
    }: ListBySizePetRequest): Promise<ListBySizePetResponse> {

        const pets = await this.petRepository.findBySize(
            minSize,
            maxSize
        );

        return { pets };
    }
}