import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users/', usersRouter)
app.get('/', async (req: Request, res: Response) => {
  res.send('website is running ')
})

export default app
