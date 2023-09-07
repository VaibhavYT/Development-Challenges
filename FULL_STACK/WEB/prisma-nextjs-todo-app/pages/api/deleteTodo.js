// pages/api/deleteTodo.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;
      await prisma.todo.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(204).end(); // 204 No Content indicates successful deletion
    } catch (error) {
      console.error("Error deleting Todo:", error);
      res.status(500).json({ error: "Unable to delete Todo" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
