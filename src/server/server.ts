import express from 'express'
import next from 'next'
import socketIO from 'socket.io'

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const options = {
    cors: {
        origin: '*',
    }
}

const io = new socketIO.Server(options)

io.on('connect', (client) => {
    console.log('IO:Client Subscribe -> Messages', client.id)

    client.on('disconnect', () => {
        console.log('Unsubscribe IO:Client -> Messages', client.id)
    })

    setInterval(() => {
        console.log('emit changes to', client.id)
        client.emit('CHANGES', { randomNumber: Math.random() * 100 })
    }, 5000)
})

io.listen(3001)


app.prepare().then(() => {
    const server = express()

    server.all('*', (req: any, res: any) => {
        return handle(req, res)
    })

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})