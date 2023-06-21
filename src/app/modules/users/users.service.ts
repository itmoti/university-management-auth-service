import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utilities'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id
  if (!user.password) {
    user.password = config.DEFAULT_USERS_PASSWORD as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
