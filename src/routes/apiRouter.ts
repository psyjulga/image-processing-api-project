import { Router } from 'express'
import ImageCtrl from '../controllers/ImageCtrl'

const apiRouter = Router()

apiRouter.get('/', ImageCtrl.showImage)

export default apiRouter
