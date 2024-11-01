import { OwnerRepository } from "@/interfaces/owner-repository";
import { prisma } from "@/lib/prisma";
import { Prisma, Owner } from "@prisma/client";

export class PrismaOwnerRepository implements OwnerRepository{
    async create(data: Prisma.OwnerUncheckedCreateInput): Promise<Owner> {
        const owner = await prisma.owner.create({
            data
        });

        return owner;
    }
    
}