// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

// Create the PostgreSQL pool
const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });

// Create the Prisma Adapter
const adapter = new PrismaPg(pool);

// Create global PrismaClient instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: ["query"], // optional
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
