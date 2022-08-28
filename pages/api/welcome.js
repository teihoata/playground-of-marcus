
import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const messages = await prisma.welcome.findMany()
    return res.status(200).send({
        props: { messages }
    });
}