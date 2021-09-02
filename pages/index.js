import Menu from "../components/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold my-8">SWR with Axios</h1>
      <h2 className="text-2xl mb-4">(Home)</h2>
      <Menu />
    </div>
  );
}
