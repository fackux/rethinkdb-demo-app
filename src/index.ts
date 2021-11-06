import { rethinkConnect, onConnectionError } from "./db";
import { onRethinkConnect } from "./events/onRethinkConnect";

rethinkConnect({ password: 'jep666A' })
    .then(onRethinkConnect)
    .catch(onConnectionError)
