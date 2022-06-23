// SERVICE => business logic and database interaction
//         => error THROWING

import sharp, { OutputInfo } from 'sharp'
import path from 'path'
export class ImageService {
    async showImage(filename: string, width: string, height: string): Promise<OutputInfo | undefined> {
        try {
            const oldPath = path.resolve(`images/full/${filename}.jpg`)
            const newPath = path.resolve(`images/thumb/${filename}-${width}-${height}.jpg`)

            const image = await sharp(oldPath).resize(Number(width), Number(height)).toFile(newPath)

            if (!image) {
                throw new Error('image processing failed')
            }

            return image
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('error with sharp', e)
        }
    }
}

export default new ImageService()
