"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeBlogSection from "@/components/HomeBlogSection";

export default function Home() {
  const tiktokVideos = [
    "https://www.tiktok.com/embed/7405560956723498258",
    "https://www.tiktok.com/embed/7319820434650811655",
    "https://www.tiktok.com/embed/7434120857548639496",
  ];

  const pricing = [
    { service: "Cắt tóc nam", price: "100,000 VND" },
    { service: "Cắt tóc nữ", price: "150,000 VND" },
    { service: "Uốn tóc", price: "300,000 VND - 500,000 VND" },
    { service: "Nhuộm tóc", price: "400,000 VND - 800,000 VND" },
    { service: "Duỗi tóc", price: "500,000 VND - 700,000 VND" },
    { service: "Gội đầu & massage", price: "50,000 VND" },
    { service: "Dưỡng tóc chuyên sâu", price: "200,000 VND - 400,000 VND" },
  ];

  const slides = [
    {
      id: 1,
      text: "Dịch vụ làm tóc chuyên nghiệp",
      image: "/images/slide1.jpg",
    },
    {
      id: 2,
      text: "Phong cách hiện đại, đẳng cấp",
      image: "/images/slide2.jpg",
    },
  ];

  return (
    <div className="px-4 md:px-10 bg-slate-800 text-white min-h-screen">
      <Header />

      {/* Slide dịch vụ hot */}
      <section className="w-full">
        <div className="relative flex flex-col md:flex-row w-full">
          {/* Phần text */}
          <div className="flex items-center justify-center text-center bg-black bg-opacity-60 text-white py-4 px-6 md:p-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Dịch vụ làm tóc chuyên nghiệp
              </h1>
              <p className="text-sm md:text-base">
                Biến hóa mái tóc của bạn với các dịch vụ hàng đầu tại Mila
                Salon.
              </p>
            </div>
          </div>

          {/* Phần hình ảnh */}
          <div
            className="flex-grow bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/slide1.jpg')",
              aspectRatio: "16 / 9",
            }}
          ></div>
        </div>
      </section>

      {/* Video TikTok */}
      <section className="py-6">
        <h2 className="text-xl font-bold text-center mb-4">
          TikTok @mila_hair_studio
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {tiktokVideos.map((videoUrl, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden rounded-lg aspect-[9/16]"
            >
              <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full border-none"
                style={{ display: "block" }} // Xóa nền trắng
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Bảng giá */}
      <section className="py-6">
        <h2 className="text-xl font-bold text-center mb-4">Bảng giá dịch vụ</h2>
        <div className="grid gap-2">
          {pricing.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b border-gray-600 pb-2 text-sm md:text-base"
            >
              <span>{item.service}</span>
              <span className="text-gray-300">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <HomeBlogSection />

      <Footer />
    </div>
  );
}
