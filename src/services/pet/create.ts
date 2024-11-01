import { PetRepository } from "@/interfaces/pet.-interface";
import { Pet } from "@prisma/client"
import { hash } from "bcrypt"
import { randomUUID } from "crypto"

interface createPetRequest {
    name: string,
    age: number,
    size: number,
    specie: string,
    org_id: string
}

interface CreatePetResponse {
    pet: Pet
}

export class CreatePetService {

    constructor(
        private petRepository: PetRepository
    ) {

    }

    async execute({
        name,
        age,
        size,
        specie,
        org_id
    }: createPetRequest): Promise<CreatePetResponse> {

        const pet = await this.petRepository.create({
            id: randomUUID(),
            name,
            age,
            size,
            specie,
            org_id
        });

        return { pet };
    }
}