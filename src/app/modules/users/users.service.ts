import config from '../../../config/index'
import ApiError from '../../../error/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utilities'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  // console.log(`user ${user }`)
  user.id = id
  if (!user.password) {
    user.password = config.DEFAULT_USERS_PASSWORD as string
  }
  // console.log(user)
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
