import { Inter } from "next/font/google";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const quote = await getData();
  return (
    <div className=" md:w-[1200px] ">
      <div className="p-10 text-center ">
        <div className=" grid grid-cols-3 m-3 border-2">
          <p className="text-1xl text-gray-700 uppercase border-2 font-bold"> Id</p>
          <p className="text-1xl text-gray-700 uppercase border-2 font-bold">Name</p>
          <p className="text-1xl text-gray-700 uppercase border-2 font-bold"> Type</p>
        </div>

        {quote.map((ele: { id: number; name: string; type: string }) => (
          <div key={ele.id}>
            <div className=" grid grid-cols-3 m-3 ">
              <p className="text-1xl text-gray-800 uppercase border-2"> {ele.id}</p>
              <p className="text-2xl text-orange-800 uppercase border-2"> {ele.name}</p>
              <p className="text-1xl text-gray-800 uppercase border-2"> {ele.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
