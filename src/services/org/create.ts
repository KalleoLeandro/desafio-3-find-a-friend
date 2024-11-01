import { AddressRepository } from "@/interfaces/address-interface"
import { OrgRepository } from "@/interfaces/org-interface"
import { Org } from "@prisma/client"
import { hash } from "bcrypt"
import { randomUUID } from "crypto"

interface createOrgRequest {    
    name: string,
    email: string,
    password: string,
    wppNumber: string,
    role: 'ADMIN' | 'MEMBER',
    org_address: {
        zipCode: string,
        street: string,
        nro: number,
        district: string,
        city: string,
        state: string
    }
}

interface CreateOrgResponse {
    org: Org
}

export class CreateOrgService {

    constructor(
        private orgRepository: OrgRepository,
        private addressRepository: AddressRepository
    ) {

    }

    async execute({        
        name,
        email,
        password,
        wppNumber,
        role,        
        org_address
    }: createOrgRequest): Promise<CreateOrgResponse> {                

        const address  = await this.addressRepository.create({
            id: randomUUID(),
            ...org_address
        });

        const password_hash = await hash(password, 6);
        

        const org = await this.orgRepository.create({            
            id: randomUUID(),
            name,
            email,
            password_hash,
            wppNumber,
            role,
            created_at: new Date(),
            address_id: address.id
        });


        return { org };
    }
}