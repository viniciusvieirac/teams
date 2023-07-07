import prisma from "../prisma/client"

export const teamsController = {
    async getTeam(req: Request, res: Response) {
        const teams = await prisma.team.findMany();
        return res.json();
    }
};
