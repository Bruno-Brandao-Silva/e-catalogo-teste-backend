import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import ResetDataBase from './resetDataBase';
import ProductRouter from './routes/products';

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Contato o administrador do sistema');
});

app.get('/', (req, res) => {
  res.send('API online!');
});

app.use('/produtos', ProductRouter);


ResetDataBase().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
