import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.router'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//application routes
app.use('/api/v1/users/', usersRouter)

app.get('/api/v1/user/createuser2', async (req: Request, res: Response) => {
  res.send('wokin')
})
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // throw new ApiError(400,'This is long error');
  next('ore baba')
  // throw new Error()
  // res.send('website is running ')
})

export default app
