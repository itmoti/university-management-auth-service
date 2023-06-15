import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("website is running ");
});

export default app;
