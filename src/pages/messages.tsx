import Link from "next/link";
import openSocket from 'socket.io-client'
import { useState, useEffect } from "react";

export default function Messages() {
    const [socket] = useState(openSocket('http://localhost:3001'))
    
    const [randomNumber, setRandomNumber] = useState(0)

    useEffect(() => {
        socket.on('CHANGES', (changes) => {
            setRandomNumber(changes.randomNumber)
        })
        return () => {
            socket.close()
        }
    }, [socket])

    return (
        <div>
            <h1>Page Messages</h1>

            <p>{randomNumber}</p>

            <Link href="/" as="/">
                <a>Home</a>
            </Link>
        </div>
    );
}
