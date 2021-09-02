import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex">
      <Link href="/">
        <a className="px-4 py-2 text-blue-500">Home</a>
      </Link>
      <Link href="/posts">
        <a className="px-4 py-2 text-blue-500">Posts</a>
      </Link>
      <Link href="/users">
        <a className="px-4 py-2 text-blue-500">Users</a>
      </Link>
      <Link href="/todos">
        <a className="px-4 py-2 text-blue-500">Todos</a>
      </Link>
    </div>
  );
}
