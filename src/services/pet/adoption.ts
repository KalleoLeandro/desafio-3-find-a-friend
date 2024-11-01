import { ResourceNotFoundError } from "@/errors/resource-not-found-error";
import { PetRepository } from "@/interfaces/pet.-interface";

interface AdoptionPetRequest {
    user_id: string,
    pet_id: string
}

interface AdoptionPetResponse {
    message: string
}

export class AdoptionPetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        user_id,
        pet_id
    }: AdoptionPetRequest): Promise<AdoptionPetResponse> {

        const pet = await this.petRepository.updateAdoption(
            user_id,
            pet_id
        );

        if (!pet) {
            throw new ResourceNotFoundError();
        }

        return { message: "Adoção concluida com sucesso!" };
    }
}