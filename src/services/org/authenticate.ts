import { InvalidCredentialsError } from "@/errors/invalid-credentials-error";
import { OrgRepository } from "@/interfaces/org-interface";
import { Org, User } from "@prisma/client";
import { compare } from "bcrypt";

interface AuthenticateUseCaseRequest {
    email: string
    password: string
}

interface AuthenticateUseCaseResponse {
    org: Org
}

export class AuthenticateOrgService {
    constructor(
        private orgRepository: OrgRepository
    ) { }

    async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const org = await this.orgRepository.findByEmail(email);
        
        if (!org) {
            throw new InvalidCredentialsError();
        }

        const doesPasswordMatches = await compare(password, org.password_hash);

        if (!doesPasswordMatches) {
            throw new InvalidCredentialsError();
        }
        return  {
            org
        };
    }
}