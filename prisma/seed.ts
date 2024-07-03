import { prisma } from "src/infra/prisma";

async function seed() {
  //await prisma.awards.create({})
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
