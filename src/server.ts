import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient() // acesso as tabelas do DB

app.register(cors) // habilitar para aplicacoes frontend acessem (seguranca)

app.get('/hello', async () => {
     const habits = await prisma.habit.findMany()
    
    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server running!')
})