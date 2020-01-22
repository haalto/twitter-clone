import { Router } from 'express'
const userRouter = Router()
import { createUser,
         getUser,
         getUsers,
         updateUser,
         deleteUser
        } 
from '../controllers/users'

userRouter.get('/', getUsers)

userRouter.get('/:id', getUser)

userRouter.post('/', createUser)

userRouter.put('/:id', updateUser)

userRouter.put('/:id', deleteUser)

export default userRouter