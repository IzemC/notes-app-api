const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
(async () => {
    await prisma.$connect();
})();
module.exports = { prisma }