import { env } from "@/env/server";
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
