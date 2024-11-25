import Link from "next/link";
import ContactFloatingButton from "./ContactFloatingButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Đường viền trên Footer */}
      <div className="border-t border-gray-700"></div>

      {/* Nội dung Footer */}
      <div className="container mx-auto px-6 py-10 grid gap-10 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Cột 1: Thông tin thương hiệu */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-white block mb-4"
          >
            mila.io.vn
          </Link>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Địa chỉ:</strong> SH 09 CT3 IEC Residences, Quận Hai Bà
              Trưng, Vietnam
            </p>
            <p>
              <strong>Zalo Mila Hair:</strong>{" "}
              <Link href="https://zalo.me/84363119622" className="hover:underline">
                +84 36 311 9622
              </Link>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <Link href="https://mila.io.vn" className="hover:underline">
                mila.io.vn
              </Link>
            </p>
            <p>
              <strong>Facebook:</strong>{" "}
              <Link href="https://www.facebook.com/hairthanhtu" className="hover:underline">
                Thanh Tú
              </Link>
            </p>
          </div>
        </div>

        {/* Cột 2: Sitemap */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/gioithieu" className="hover:underline">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link href="/banggia" className="hover:underline">
                Bảng Giá
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/lienhe" className="hover:underline">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Google Maps */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Bản đồ</h3>
          <div className="rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59603.71790848228!2d105.78735888782963!3d20.983320537923728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad67bb56ce11%3A0x1d65aabbf5460356!2sMILA%20HAIR%20SALON!5e0!3m2!1svi!2skh!4v1732023364447!5m2!1svi!2skh"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Cột 4: DMCA và Bộ Công Thương */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Chứng nhận</h3>
          <div className="space-y-3">
            <a
              href="https://www.dmca.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=f5c7ce9d-bbe1-46db-b83d-a5c44f756ddf"
                alt="DMCA Protected Logo"
                className="w-28"
              />
            </a>
            <a
              href="https://moit.gov.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                alt="Bộ Công Thương Logo"
                className="w-28"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-6 text-center border-t border-gray-700 pt-6 text-sm">
        <p>© {new Date().getFullYear()} Mila Salon. All Rights Reserved.</p>
        <ContactFloatingButton />
      </div>
    </footer>
  );
}
