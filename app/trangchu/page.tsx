import { redirect } from "next/navigation";

export default function Home() {
  // Redirect về domain gốc
  redirect("https://mila.io.vn");
  return null;
}
