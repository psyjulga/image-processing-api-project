import { Router } from 'express'
import ImageCtrl from '../controllers/ImageCtrl'

const apiRouter = Router()

// localhost:3000/api/images

apiRouter.get('/', ImageCtrl.showImage)

export default apiRouter
