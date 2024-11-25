"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Pricing() {
  const pricing = [
    { service: "Cắt tóc nam", price: "100,000 VND" },
    { service: "Cắt tóc nữ", price: "150,000 VND" },
    { service: "Uốn tóc", price: "300,000 VND - 500,000 VND" },
    { service: "Nhuộm tóc", price: "400,000 VND - 800,000 VND" },
    { service: "Duỗi tóc", price: "500,000 VND - 700,000 VND" },
    { service: "Gội đầu & massage", price: "50,000 VND" },
    { service: "Dưỡng tóc chuyên sâu", price: "200,000 VND - 400,000 VND" },
  ];

  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-6 md:px-20 lg:px-40 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Bảng giá dịch vụ</h1>
        <table className="w-full border-collapse border border-gray-700 text-lg text-left mb-6">
          <thead>
            <tr>
              <th className="border border-gray-700 p-4">Dịch vụ</th>
              <th className="border border-gray-700 p-4">Giá</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item, idx) => (
              <tr key={idx} className="even:bg-gray-800">
                <td className="border border-gray-700 p-4">{item.service}</td>
                <td className="border border-gray-700 p-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center text-lg">
          Để biết thêm thông tin chi tiết hoặc tư vấn dịch vụ, vui lòng liên hệ{" "}
          <Link href="tel:+84363119622" ><strong className="underline">+84 363 119 622</strong></Link>.
          
        </p>
      </div>
      <Footer />
    </div>
  );
}
