import { Router } from 'express'
import { checkLoginCredentials } from '../controllers/login'
const loginRouter = Router()

loginRouter.post('/', checkLoginCredentials)

export default loginRouter