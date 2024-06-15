import { generateUserId } from "@/utils";
import { PrismaClient } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();

  const total = await prisma.user.count();
  return Response.json({
    data: users,
    total,
  });
}

export async function POST(request: Request) {
  const res = await request.json();
  const user = await prisma.user.create({
    data: {
      username: generateUserId(),
      nickname: res.nickname,
      email: res.email,
      password: res.password,
    },
  });
  return Response.json({ msg: "create user success", data: user });
}

export async function PUT(request: Request) {
  const res = await request.json();
  const user = await prisma.user.update({
    where: { id: res.id },
    data: {
      nickname: res.nickname,
      email: res.email,
      password: res.password,
      updatedAt: new Date(),
    },
  });
  return Response.json({ msg: "update user success", data: user });
}
