import Link from "next/link";

export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 0;

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

export default async function Home() {
  const res = await fetch(baseUrl + "/api/random", { cache: "no-store" });
  const data = await res.json();

  return (
    <div>
      <div>Random number: {data.number}</div>
      <Link
        href="/some-page"
        className="inline-flex mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to some page
      </Link>
    </div>
  );
}
