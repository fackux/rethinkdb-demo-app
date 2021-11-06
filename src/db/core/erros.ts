import { ReqlDriverError, ReqlError } from "rethinkdb";

export const onConnectionError = (error: ReqlDriverError) => console.error(error.message)

export const onReqlError = (error: ReqlError) => console.error(error.message)