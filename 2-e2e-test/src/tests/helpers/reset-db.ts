
import { PrismaClient } from '../../../generated/prisma/index.js'

const prisma = new PrismaClient()

export async function clearDb(){
  prisma.request.deleteMany()
}