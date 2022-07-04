import app from '../src/app'
import request from 'supertest'
import { Server } from 'http'

let server: Server

describe('image controller', () => {
    beforeEach(() => {
        server = app.listen()
    })
    afterEach(async () => {
        // eslint-disable-next-line no-console
        await server.close(() => console.log('server closing'))
    })

    describe('image controller', (): void => {
        test('serving correct query parameters should retun status code 200', async (): Promise<void> => {
            const response = await request(server).get('/api/images?filename=sahara-desert&width=300&height=300')
            expect(response.status).toBe(200)
        })
        test('a missing query parameter should return status code 400', async (): Promise<void> => {
            const response = await request(server).get('/api/images?filename=sahara-desert&width=300')
            expect(response.status).toBe(400)
        })
        test('a missing query parameter should return a message for the user', async (): Promise<void> => {
            const response = await request(server).get('/api/images?filename=sahara-desert&width=300')
            expect(response.text).toBe(
                'query string missing - please use the following url format: /api/images?filename:YOURFILE&width:YOURWIDTH&height:YOURHEIGHT'
            )
        })
        test('querying a non-existing filename should return status code 400', async (): Promise<void> => {
            const response = await request(server).get('/api/images?filename=non-existent&width=300&height=300')
            expect(response.status).toBe(400)
        })
        test('querying a non-existing filename should return a message for the user', async (): Promise<void> => {
            const response = await request(server).get('/api/images?filename=non-existent&width=300&height=300')
            expect(response.text).toBe('image not found')
        })
    })
})
