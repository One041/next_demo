import Link from "next/link";

export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 0;

export default function SomePage() {
  return (
    <div>
      <h1>Some page</h1>
      <Link
        href="/"
        className="inline-flex mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to home page
      </Link>
    </div>
  );
}
