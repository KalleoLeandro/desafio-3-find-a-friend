import { AddressRepository } from "@/interfaces/address-interface";
import { OwnerRepository } from "@/interfaces/owner-repository";
import { Owner } from "@prisma/client";
import { randomUUID } from "crypto";

interface createOwnerRequest {
    name: string,
    email: string,
    phone: string,
    owner_address: {
        zipCode: string,
        street: string,
        nro: number,
        district: string,
        city: string,
        state: string
    }
}

interface CreateOwnerResponse {
    owner: Owner
}

export class CreateOwnerService {

    constructor(
        private ownerRepository: OwnerRepository,
        private addressRepository: AddressRepository
    ) {
       
    }

    async execute({
        name, email, phone, owner_address
    }: createOwnerRequest): Promise<CreateOwnerResponse> {

        const address = await this.addressRepository.create({
            id: randomUUID(),
            ...owner_address            
        });

        const owner = await this.ownerRepository.create({
            id: randomUUID(),
            name,
            email,
            phone,
            created_at: new Date(),
            address_id: address.id
        });

        return { owner };
    }
}