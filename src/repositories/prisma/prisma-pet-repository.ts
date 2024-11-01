import { PetRepository } from '@/interfaces/pet.-interface';
import { prisma } from '@/lib/prisma';
import { Pet, Prisma } from '@prisma/client';

export class PrismaPetRepository implements PetRepository {
    async updateAdoption(user_id: string, pet_id: string): Promise<Pet | null> {
        const pet = await prisma.pet.update({
            where: {
                id: pet_id,
            },
            data: {
                adopted: true,                
                owner_id: user_id,                
            },
        });

        return pet;
    }
    async findById(id: string): Promise<Pet | null> {
        const pet = await prisma.pet.findUnique({
            where: {
                id
            }
        });

        if(!pet){
            return null;
        }

        return pet;
    }
    async findBySpecie(specie: string): Promise<Pet[]> {
        const pets = await prisma.pet.findMany({
            where: {
                specie
            }
        });

        return pets;
    }
    async findBySize(minSize: number, maxSize: number): Promise<Pet[]> {
        const pets = await prisma.pet.findMany({
            where: {
                size: {
                    gte: minSize,
                    lte: maxSize
                }
            }
        });

        return pets;
    }

    async findByCity(city: string): Promise<Pet[]> {
        const pets = await prisma.pet.findMany({
            where: {
                org: {
                    address: {
                        city: {
                            equals: city,
                            mode: 'insensitive'
                        },
                    }
                }
            }
        });

        return pets;
    }

    async create(data: Prisma.PetUncheckedCreateInput) {
        const pet = await prisma.pet.create({
            data
        });
        return pet;
    }
}
