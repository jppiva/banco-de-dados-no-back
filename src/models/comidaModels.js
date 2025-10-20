import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Crio a variavel findAll e já exporto
export const findAll = async () => {
    // SELECT * FROM bruxos = findMany
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc' }
    });
}
