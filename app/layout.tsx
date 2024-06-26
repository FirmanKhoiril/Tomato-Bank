import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomato Bank - Simplifying Your Banking Experience",
  description: "Tomato Bank is a user-friendly banking app designed to streamline your financial management. Enjoy seamless transactions, real-time account monitoring, secure money transfers, and personalized financial insights, all in one intuitive platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
