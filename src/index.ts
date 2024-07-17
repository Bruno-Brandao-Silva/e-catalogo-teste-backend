import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import ResetDataBase from './resetDataBase';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: string, req: Request, res: Response, next?: NextFunction) => {
  console.error(err);
  res.status(500).send('Contato o administrador do sistema');
  next && next();
});

app.use('/', routes);

ResetDataBase().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
