import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user crated successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      error: err,
      // success: false,
      // message: 'failes to create user',
    })
  }
}

export default { createUser }
