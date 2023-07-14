import config from '../../../config/index';
import ApiError from '../../../error/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utilities';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();

  // console.log(`user ${user }`)
  user.id = id;
  if (!user.password) {
    user.password = config.DEFAULT_USERS_PASSWORD as string;
  }
  // console.log(user)
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
