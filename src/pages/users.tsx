import Link from "next/link";

export default function Users() {
    return (
        <div>
            <h1>Page Messages</h1>
            <Link href="/" as="/">
                <a>Home</a>
            </Link>
        </div>
    );
};
