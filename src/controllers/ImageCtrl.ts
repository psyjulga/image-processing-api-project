// CONTROLLER => parses the request and calls the service action
//            => error HANDLING

import { Request, Response } from 'express'

import fs from 'fs'
import path from 'path'
import ImageService from '../services/ImageService'

export class ImageCtrl {
    async showImage(req: Request, res: Response): Promise<void> {
        const filename = req.query.filename as unknown as string
        const width = req.query.width as unknown as string
        const height = req.query.height as unknown as string

        const imagePath = path.resolve(`images/thumb/${filename}-${width}-${height}.jpg`)

        if (!filename || !width || !height) {
            res.status(400).send(
                'query string missing - please use the following url format: /api/images?filename:YOURFILE&width:YOURWIDTH&height:YOURHEIGHT'
            )
        } else {
            if (!fs.existsSync(imagePath)) {
                // eslint-disable-next-line no-console
                console.log('creating new image')

                const image = await ImageService.showImage(filename, width, height)

                if (!image) {
                    res.status(400).send('image not found')
                }
            }

            res.status(200).sendFile(imagePath)
        }
    }
}

export default new ImageCtrl()
