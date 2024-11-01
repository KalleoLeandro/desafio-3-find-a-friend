import { Pet, Prisma } from "@prisma/client"

export interface PetRepository {
    findById(id: string): Promise<Pet | null>
    findByCity(city: string): Promise<Pet[]>
    findBySize(minSize: number, maxSize: number): Promise<Pet[]>
    findBySpecie(specie: string): Promise<Pet[]>
    create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
    updateAdoption(user_id: string, pet_id:string): Promise<Pet | null>
}