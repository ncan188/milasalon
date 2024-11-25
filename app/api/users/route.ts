import { NextResponse } from "next/server";

const users = [
    { "id": 1, "name": "Thanh Tú", "email": "hairthanhtu@gmail.com" },
    { "id": 2, "name": "NCan", "email": "ncan.stt@gmail.com" }
];

export async function GET() {
  // Trả về danh sách users dưới dạng JSON
  return NextResponse.json(users);
}
