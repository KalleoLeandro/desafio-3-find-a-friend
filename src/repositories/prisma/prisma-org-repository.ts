import { OrgRepository } from '@/interfaces/org-interface';
import { prisma } from '@/lib/prisma';
import { Prisma, Org } from '@prisma/client';

export class PrismaOrgRepository implements OrgRepository{    
    
    async create(data:Prisma.OrgUncheckedCreateInput){
        const org = await prisma.org.create({
            data
        });
        return org;
    }

    async findByEmail(email: string) {
        const org = await prisma.org.findUnique({
            where: {
                email
            }
        });

        return org;
    }
}