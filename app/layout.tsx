import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mila salon",
  description:
    "mila chuyên đào tạo nghề và cung cấp các sản phẩm chăm sóc tóc khác uy tín và chất lượng .Với nhiều năm kinh nghiệm, chúng tôi đã và đang được nhiều khách hàng tại biết tới như một địa chỉ uy tín và tin cậy nhất.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
