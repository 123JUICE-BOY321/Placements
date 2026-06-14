import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());

app.post('/student', async (req, res) => {
  const { name, age, course } = req.body;
  const newStudent = await prisma.student.create({
    data: {
      name,
      age,
      course,
    },
  });
  res.json(newStudent);
});

app.listen(port, () => {
  console.log(port);
});

export { prisma };