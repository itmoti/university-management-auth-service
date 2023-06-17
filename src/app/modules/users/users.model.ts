import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// 3. Create a Model.
type UserModel = Model<IUser, object>
const userSchema = new Schema<IUser, UserModel>({
  id: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
})

export const User = model<IUser, UserModel>('User', userSchema)
