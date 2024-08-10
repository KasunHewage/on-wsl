import { sampleThreads } from "@/constants/samples/sampleThreads";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { page, limit, status }: any = await req.json();

  let sampleData = sampleThreads.filter((el, i) => el.status === status);

  const skip = (page - 1) * limit;
  const count = page * limit;

  const response = {
    status: "success",
    page: page,
    total: sampleData.length,
    current: count,
    data: sampleData.slice(skip, count),
  };

  return Response.json(response);
}
