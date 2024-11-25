"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="px-10 md:px-40 bg-slate-800 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-6 md:px-20 lg:px-40 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Liên hệ Mila Salon
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Thông tin liên hệ */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>
            <p className="mb-4">
              <strong>Địa chỉ:</strong> Số 123, Đường ABC, Quận XYZ, TP. Hồ Chí
              Minh
            </p>
            <p className="mb-4">
              <strong>Zalo Mila Hair : </strong>{" "}
              <Link href="https://zalo.me/84363119622" className="">
                +84 36 311 9622
              </Link>
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:hairthanhtu@gmail.com" className="">
                hairthanhtu@gmail.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Giờ hoạt động:</strong> Thứ 2 - Chủ nhật: 8:00 - 20:00
            </p>
          </div>

          {/* Bản đồ Google Maps */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              Địa chỉ của chúng tôi
            </h2>
            <div className="rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59603.71790848228!2d105.78735888782963!3d20.983320537923728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad67bb56ce11%3A0x1d65aabbf5460356!2sMILA%20HAIR%20SALON!5e0!3m2!1svi!2skh!4v1732023364447!5m2!1svi!2skh"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
