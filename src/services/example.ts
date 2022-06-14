/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

// import { User } from '../types/example'

const users = [
    {
        id: '62a260d8e6d50110aa4fff2c',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Sampson_Christian',
        gender: 'male',
        email: 'sampsonchristian@opticom.com',
        tags: ['nulla', 'excepteur', 'reprehenderit', 'cupidatat', 'cupidatat', 'in', 'sint'],
    },
    {
        id: '62a260d8ed37ebf681a91ffa',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Fitzpatrick_Curry',
        gender: 'male',
        email: 'fitzpatrickcurry@opticom.com',
        tags: ['ad', 'enim', 'cillum', 'proident', 'anim', 'non', 'officia'],
    },
    {
        id: '62a260d8eacab4db84cf891f',
        isActive: false,
        avatar: 'http://placehold.it/32x32',
        username: 'Teresa_Lloyd',
        gender: 'female',
        email: 'teresalloyd@opticom.com',
        tags: ['exercitation', 'occaecat', 'officia', 'laboris', 'enim', 'ipsum', 'non'],
    },
]

export class ExampleService {
    getAll() {
        return users
    }
    getOne(id: string) {
        const user = users.find((user) => user.id === id)
        if (!user) {
            throw Error('User not found')
        }
        return user
    }
}
export default new ExampleService()
