import sharp from 'sharp'

// we write our functions here parallel to testing them

export async function resizeImage() {
    try {
        await sharp('images/full/the persistance of memory.jpg').resize(200, 200).toFile('images/thumb/edited2.jpg')
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('error with sharp', e)
    }
}

resizeImage()
