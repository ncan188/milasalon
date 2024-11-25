import { NextResponse } from "next/server";

const comments = [
    { "id": 1, "postId": 1, "users": 2, "content": "Tuyệt vời nha shop!" },
    { "id": 2, "postId": 2, "users": 1, "content": "Shop Mila mãi đỉnh." }
  ];

export async function GET() {
  // Trả về danh sách comments dưới dạng JSON
  return NextResponse.json(comments);
}
