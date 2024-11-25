import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaPhone, FaListAlt, FaBlog } from "react-icons/fa";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Màn hình nhỏ hơn hoặc bằng 768px là mobile
    };
    handleResize(); // Kiểm tra ngay khi component được mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Header chính cho desktop */}
      <header
        className={`${
          isMobile ? "hidden" : " px-10 md:px-40 w-full"
        } bg-slate-800 shadow-md z-50`}
      >
        <div className="py-5 px-5 flex justify-between items-center">
          <Link href={"/"} className="text-2xl cursor-pointer font-bold">
            mila.io.vn
          </Link>
          <div className="flex space-x-10 text-lg">
            <Link
              href={"/"}
              className="hover:bg-slate-200 px-4 py-2 rounded-lg cursor-pointer hover:text-slate-800"
            >
              Trang chủ
            </Link>
            <Link
              href={"/gioithieu"}
              className="hover:bg-slate-200 px-4 py-2 rounded-lg cursor-pointer hover:text-slate-800"
            >
              Giới thiệu
            </Link>
            <Link
              href={"/banggia"}
              className="hover:bg-slate-200 px-4 py-2 rounded-lg cursor-pointer hover:text-slate-800"
            >
              Bảng giá
            </Link>
            <Link
              href={"/blog"}
              className="hover:bg-slate-200 px-4 py-2 rounded-lg cursor-pointer hover:text-slate-800"
            >
              Blog
            </Link>
            <Link
              href={"/lienhe"}
              className="hover:bg-slate-200 px-4 py-2 rounded-lg cursor-pointer hover:text-slate-800"
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </header>

      {/* Menu dưới cùng cho mobile */}
      {isMobile && (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-t-md z-50">
          <div className="flex justify-between items-center px-5 py-3">
            <Link
              href={"/"}
              className="flex flex-col items-center text-center text-gray-700 hover:text-blue-600"
            >
              <FaHome size={24} />
              <span className="text-sm">Trang chủ</span>
            </Link>
            <Link
              href={"/gioithieu"}
              className="flex flex-col items-center text-center text-gray-700 hover:text-blue-600"
            >
              <FaInfoCircle size={24} />
              <span className="text-sm">Giới thiệu</span>
            </Link>
            <Link
              href={"/lienhe"}
              className="flex flex-col items-center text-center text-gray-700 hover:text-blue-600"
            >
              <FaPhone size={24} />
              <span className="text-sm">Liên hệ</span>
            </Link>
            <Link
              href={"/banggia"}
              className="flex flex-col items-center text-center text-gray-700 hover:text-blue-600"
            >
              <FaListAlt size={24} />
              <span className="text-sm">Bảng giá</span>
            </Link>
            <Link
              href={"/blog"}
              className="flex flex-col items-center text-center text-gray-700 hover:text-blue-600"
            >
              <FaBlog size={24} />
              <span className="text-sm">Blog</span>
            </Link>
          </div>
        </footer>
      )}
    </>
  );
}
