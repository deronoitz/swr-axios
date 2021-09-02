import useSWR from "swr";
import axios from "axios";

import Menu from "../components/menu";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const url = "https://jsonplaceholder.typicode.com/users/";

export default function Users() {
  const { data, error } = useSWR(url, fetcher);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold my-8">SWR with Axios</h1>
      <h2 className="text-2xl mb-4">(Users)</h2>
      <Menu />

      <div className="container">
        {!data && "Loading..."}
        {error && "Error..."}
        {data?.map((user) => (
          <div className="p-4 bg-gray-200 my-4 rounded-md" key={user.id}>
            <h3 className="font-bold">
              {user.id}. {user.name}
            </h3>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
