import useSWR from "swr";
import axios from "axios";

import Menu from "../components/menu";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const url = "https://jsonplaceholder.typicode.com/posts/";

export default function Posts() {
  const { data, error } = useSWR(url, fetcher);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold my-8">SWR with Axios</h1>
      <h2 className="text-2xl mb-4">(Post)</h2>
      <Menu />

      <div className="container">
        {!data && "Loading..."}
        {error && "Error..."}
        {data?.map((post) => (
          <div className="p-4 bg-gray-200 my-4 rounded-md" key={post.id}>
            <h3 className="font-bold">
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
