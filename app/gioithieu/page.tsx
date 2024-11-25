"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-6 md:px-20 lg:px-40 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Giới thiệu về Mila Salon</h1>
        <p className="text-lg leading-8 mb-6">
          Chào mừng bạn đến với Mila Salon, nơi chúng tôi tin rằng mái tóc chính là vương miện của bạn. Với hơn 10 năm kinh nghiệm trong ngành làm đẹp, Mila Salon luôn tự hào mang đến những dịch vụ chăm sóc tóc chuyên nghiệp, hiện đại và đẳng cấp.
        </p>
        <p className="text-lg leading-8 mb-6">
          Tại Mila Salon, đội ngũ chuyên gia của chúng tôi không chỉ có tay nghề cao mà còn không ngừng cập nhật những xu hướng tóc mới nhất trên thế giới. Dù bạn muốn làm mới phong cách hay chăm sóc mái tóc khỏe đẹp, chúng tôi luôn sẵn sàng đồng hành để biến mong muốn của bạn thành hiện thực.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tại sao chọn Mila Salon?</h2>
          <ul className="list-disc list-inside">
            <li>Đội ngũ chuyên gia được đào tạo bài bản với nhiều năm kinh nghiệm.</li>
            <li>Trang thiết bị hiện đại, sản phẩm chăm sóc tóc cao cấp và an toàn.</li>
            <li>Không gian sang trọng, thoải mái mang lại trải nghiệm tuyệt vời.</li>
            <li>Chương trình ưu đãi hấp dẫn và dịch vụ khách hàng tận tâm.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
