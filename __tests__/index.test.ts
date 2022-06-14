import sharp from 'sharp'

// import app from '../src/index'
// how to test if the server is working?

test('server is running', () => {
    // ??
})

// test the resizing of sharp lib
// we don't test external apis - we mock them

jest.mock('sharp')

// sharp(img_path).resize(w,h).toFile(new_path)

// const mockedSharp = sharp as jest.Mocked<typeof sharp>
sharp.prototype.resize.mockImplementation(() => 'test')

sharp('images/full/the persistance of memory.jpg').resize(5, 10)
