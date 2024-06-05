import prismaClient from "../prisma";

class ListCustomersService {
    async execute() {
        const customres = await prismaClient.customer.findMany()
        return customres;
    }
}

export { ListCustomersService }