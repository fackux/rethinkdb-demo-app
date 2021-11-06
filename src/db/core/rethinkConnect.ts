import { connect, ConnectionOptions, Connection } from "rethinkdb";

export function rethinkConnect(options: ConnectionOptions = {}): Promise<Connection> {
    const connectionOptions: ConnectionOptions = {
        ...options,
        host: options?.host || 'localhost',
        port: options?.port || 28015
    }

    return connect(connectionOptions)
}

export interface OnConnect {
    (connection: Connection): void
}