// SERVICE => business logic and database interaction
//         => error THROWING

import sharp from 'sharp'

export class ImageService {
    async showImage(filename: string, width: string, height: string) {
        try {
            await sharp(`images/full/${filename}.jpg`)
                .resize(Number(width), Number(height))
                .toFile(`images/thumb/${filename}.jpg`)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log('error with sharp', e)
        }

        return 'test'
    }
}

export default new ImageService()
