import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

import Menu from "../components/menu";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const url = "https://jsonplaceholder.typicode.com/todos?_limit=50&_start=180";

export default function Todos() {
  const [text, setText] = useState("");
  const { data, error, mutate, isValidating } = useSWR(url, fetcher);

  async function handleSubmit() {
    try {
      const body = {
        title: text,
        completed: false
      };
      mutate([body, ...data]);

      const res = await axios({
        method: "post",
        url,
        data: {
          title: text
        }
      });

      const resData = res.data;
      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold my-8">SWR with Axios</h1>
      <h2 className="text-2xl mb-4">(Todos)</h2>
      <Menu />
      <p>isValidating: {isValidating.toString()}</p>
      <div className="container">
        <div className="text-center mt-4 mb-8">
          <input
            className="px-4 py-2 border"
            placeholder="Insert todo..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-blue-500 px-4 py-2 text-white ml-2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {!data && "Loading..."}
        {error && "Error..."}
        {data?.map((todo) => (
          <div className="p-4 bg-gray-200 my-4 rounded-md" key={todo.id}>
            <h3 className="font-bold">
              {todo.id}. {todo.title}
            </h3>
            {todo.completed ? <p className="text-green-600">Done</p> : <p className="text-yellow-600">Not started</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
