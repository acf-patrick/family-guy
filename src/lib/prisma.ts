import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
let globalForPrisma = global as {
  prisma?: PrismaClient;
};

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: ["query"],
    });
  }
  prisma = globalForPrisma.prisma;
}

export default prisma;
