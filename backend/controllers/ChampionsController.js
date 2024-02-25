import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createChampion = (req, res) => {
    let champion = req.body;
    prisma.champion.create({
        data: {
            name: champion.name,
            type: champion.type,
        },
    })
    .then((champion) => {
        res.json(champion);
    })
    .catch((error) => {
        res.json({error: error.message});
    });
};


export { createChampion };