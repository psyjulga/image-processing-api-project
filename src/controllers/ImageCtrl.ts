// CONTROLLER => parses the request and calls the service action
//            => error HANDLING

import { Request, Response } from 'express'
import ImageService from '../services/imageService'

export class ImageCtrl {
    showImage(req: Request, res: Response) {
        console.log(req.params)
        const { filename, width, height } = req.params
        const test = ImageService.showImage(filename, width, height)
        // handle errors
        res.send(`test: ${test} - filename: ${filename}`)
    }

    // getAll(req: Request, res: Response) {
    //     res.json(ExampleService.getAll())
    // }
    // getOne(req: Request, res: Response) {
    //     const { id } = req.params
    //     const user = ExampleService.getOne(id)
    //     if (!user) {
    //         res.status(400).send('User not found')
    //     }
    //     res.send(res)
    // }
}

export default new ImageCtrl()
