import {users} from './seeder/Users';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'
import { hash } from 'bcrypt';
const prisma = new PrismaClient();

async function main(){
    const encryptedPassword = await hash("password", 12);
    await prisma.user.deleteMany()
    await prisma.user.createMany({
        data: users
    });
}


main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(async() => {
    await prisma.$disconnect();
})