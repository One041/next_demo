export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 0;

export async function GET(request: Request) {
  console.log("GET: /api/random");
  return Response.json({
    number: Math.trunc(Math.random() * 1000),
  });
}
