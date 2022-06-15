// SERVICE => business logic and database interaction
//         => error THROWING

import sharp from 'sharp'

export class ImageService {
    async showImage(filename: string, width: string, height: string) {
        try {
            const image = await sharp(`images/full/${filename}.jpg`)
                .resize(Number(width), Number(height))
                .toFile(`images/thumb/${filename}.jpg`)

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
