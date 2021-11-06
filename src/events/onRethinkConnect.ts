import { OnConnect, useTable } from "../db"
import { randomUser } from "../models/user.model"

export const onRethinkConnect: OnConnect = async (connection) => {
    const Users = useTable('users', connection)
    if (!await Users.checkIfExists()) {
        await Users.create()
    } else {
        await Users.clear()
    }

    for (let i = 0; i < 1000; i++) {
        const users = randomUser()
        await Users.insert(users)
    }

    const Messages = useTable('messages', connection)
    if (!await Messages.checkIfExists()) {
        await Messages.create()
    } else {
        await Messages.clear()
    }

    process.exit()
}