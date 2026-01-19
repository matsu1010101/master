import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google"; // 明朝体をインポート
import "./globals.css";

// 格調高い明朝体を設定
const notoSerif = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Ramen Hikari - 中華麺 ",
  description: "Authentic Chinese Noodles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} antialiased`}
        style={{ fontFamily: 'var(--font-noto-serif), serif' }} // 全体に適用
      >
        {children}
      </body>
    </html>
  );
}
