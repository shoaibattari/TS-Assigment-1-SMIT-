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
    <div>
      <div className="md:px-[60px] px-[20px] ">
        {quote.map((ele: { id: number; name: string; type: string }) => (
          <div key={ele.id} className="mt-10  ">
            <div className="mt-3">
              <p className="text-2xl text-orange-800 uppercase"> {ele.name}</p>
              <p className="text-1xl text-gray-700 uppercase"> {ele.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
