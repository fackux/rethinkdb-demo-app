import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/users" as="/users">
          <a>Users</a>
        </Link>
      </li>
      <li>
        <Link href="/messages" as="/messages">
          <a>Messages</a>
        </Link>
      </li>
    </ul>
  );
}
