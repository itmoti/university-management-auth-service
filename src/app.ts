import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//application routes
app.use('/api/v1/users/', UserRoutes);

app.get('/api/v1/user/createuser2', async (req: Request, res: Response) => {
  res.send('wokin');
});
app.get('/', (req: Request, res: Response) => {
  res.send('website is running ');
});

app.use(globalErrorHandler);

export default app;
