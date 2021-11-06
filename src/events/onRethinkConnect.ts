import { OnConnect, useTable } from "../db"
import { randomUser } from "../models/seeds/users"
import { Message } from '../models/types/message'
import faker from 'faker/locale/es_MX'

export const onRethinkConnect: OnConnect = async (connection) => {
    const Users = useTable('users', connection)
    if (!await Users.checkIfExists()) {
        await Users.create()
    } else {
        await Users.clear()
    }

    let users:any[] = []

    for (let i = 0; i < 1000; i++) {
        const user = randomUser()
        users.push(user)
    }

    await Users.insert(users)

    const Messages = useTable('messages', connection)
    if (!await Messages.checkIfExists()) {
        await Messages.create()
    } else {
        await Messages.clear()
    }

    users = await Users.getAll()

    setInterval(async function () {
        const pair = faker.random.arrayElements(users, 2)

        const message: Message = {
            from: pair[0].id,
            to: pair[1].id,
            text: faker.lorem.sentence(faker.datatype.number({ min: 1, max: 5 })),
            createdAt: new Date(),
            readed: false,
            readedAt: null
        }

        Messages.insert(message)
    }, 5000)
}