import { AddressRepository } from '@/interfaces/address-interface';
import { prisma } from '@/lib/prisma';
import { Prisma, Address } from '@prisma/client';

export class PrismaAddressRepository implements AddressRepository{
    
    async create(data:Prisma.AddressUncheckedCreateInput){
        const address = await prisma.address.create({
            data
        });
        return address;
    }
}