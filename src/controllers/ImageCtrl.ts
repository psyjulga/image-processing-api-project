// CONTROLLER => parses the request and calls the service action
//            => error HANDLING

import { Request, Response } from 'express'
import ImageService from '../services/imageService'
import fs from 'fs'

const root =
    'C:\\Users\\admin\\OneDrive\\Desktop\\Privat\\coding\\Masterschool\\Udacity\\BACKEND\\image processing api project\\image-processing-api-project\\images\\thumb'

export class ImageCtrl {
    async showImage(req: Request, res: Response): Promise<void> {
        const filename = req.query.filename as unknown as string
        const width = req.query.width as unknown as string
        const height = req.query.height as unknown as string

        const path = `images/thumb/${filename}-${width}-${height}.jpg`

        if (!filename || !width || !height) {
            res.send(
                'query string missing - please use the following url format: /api/images?filename:YOURFILE&width:YOURWIDTH&height:YOURHEIGHT'
            )
        } else {
            if (!fs.existsSync(path)) {
                console.log('creating new image')

                const image = await ImageService.showImage(filename, width, height)
                if (!image) {
                    res.status(400).send('image not found')
                }
            }

            res.sendFile(`${filename}-${width}-${height}.jpg`, { root: root })
        }
    }
}

export default new ImageCtrl()
