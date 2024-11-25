import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export default function ContactFloatingButton() {
  return (
    <div className="fixed bottom-20 right-5 flex flex-col space-y-3 z-50">
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/hairthanhtu" // Thay bằng link Facebook thực tế
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center justify-center"
        aria-label="Contact on Facebook"
      >
        <FaFacebookF size={24} />
      </a>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/84363119622" // Thay bằng link Zalo thực tế
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 flex items-center justify-center"
        aria-label="Contact on Zalo"
      >
        <SiZalo size={24} />
      </a>
    </div>
  );
}
