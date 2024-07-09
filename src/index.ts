import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import ResetDataBase from './preset_data';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Contato o administrador do sistema');
});

app.get('/', (req, res) => {
  res.send('API online!');
});

app.get('/produtos/page/:page', async (req, res, next) => {
  try {
    const page = Number(req.params.page);
    if (isNaN(page) || page < 1) {
      return res.status(400).json({ error: 'Número de página inválido' });
    }

    const products = await prisma.produto.findMany({
      skip: (page - 1) * 5,
      take: 5,
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

app.get('/produtos/id/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await prisma.produto.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
});

const gracefulShutdown = () => {
  prisma.$disconnect()
    .catch(e => console.error('Falha ao desconectar do banco de dados', e))
    .finally(() => process.exit());
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

ResetDataBase().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
