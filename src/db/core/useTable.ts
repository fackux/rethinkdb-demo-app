import { Connection, Table, table as _table, db, WriteResult } from "rethinkdb";

export function useTable(name: string, connection: Connection) {
    const table: Table = _table(name)

    const checkIfExists = async () => {
        const tables = await db('test').tableList().run(connection)
        return tables.includes(name)
    }

    const create = async () => {
        const tables = await db('test').tableCreate(name).run(connection)
    }

    const getAll = async () => {
        const results = await table.run(connection)
        return await results.toArray()
    }

    const clear = () => {
        return table.delete().run(connection)
    }

    const insert = (payload: Object | Object[]) => {
        return table.insert(payload).run(connection)
    }

    return {
        checkIfExists,
        getAll,
        clear,
        create,
        insert
    }
}

export interface OnInsert {
    (writeResult: Promise<WriteResult>): void
}