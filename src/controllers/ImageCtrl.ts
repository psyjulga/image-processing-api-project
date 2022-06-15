// CONTROLLER => parses the request and calls the service action
//            => error HANDLING

import { Request, Response } from 'express'
import { dirname } from 'path'
import ImageService from '../services/imageService'

export class ImageCtrl {
    async showImage(req: Request, res: Response) {
        console.log('req.query', req.query)
        const { filename, width, height } = req.query

        if (!filename || !width || !height) {
            res.send(
                'query string missing - please use the following url format: /api/images?filename:YOURFILE&width:YOURWIDTH&height:YOURHEIGHT'
            )
        }

        const image = await ImageService.showImage(filename as any, width as any, height as any)
        console.log('image', image)
        // handle errors
        if (!image) {
            res.status(400).send('image not found')
        }

        // eslint-disable-next-line no-undef
        const root = `C:\\Users\\admin\\OneDrive\\Desktop\\Privat\\coding\\Masterschool\\Udacity\\BACKEND\\image processing api project\\image-processing-api-project\\images\\thumb`

        res.sendFile(`${filename}.jpg`, { root: root })
    }
}

export default new ImageCtrl()
