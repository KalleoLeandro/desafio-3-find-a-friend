import { Owner, Prisma } from "@prisma/client";

export interface OwnerRepository {
    create(data: Prisma.OwnerUncheckedCreateInput): Promise<Owner>
}