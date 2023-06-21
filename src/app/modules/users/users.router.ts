import express from 'express'
import usersController from './users.controller'

const router = express.Router()

router.post('/createUser', usersController.createUser)

export default router
