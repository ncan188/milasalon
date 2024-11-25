import { NextResponse } from "next/server";

const tags = [
  { id: 1, name: "Khuyến mãi", slug: "khuyen-mai" },
  { id: 2, name: "Mẫu đẹp", slug: "mau-dep" },
  { id: 3, name: "Tips", slug: "tips" },
];

export async function GET() {
  // Trả về danh sách tags dưới dạng JSON
  return NextResponse.json(tags);
}
