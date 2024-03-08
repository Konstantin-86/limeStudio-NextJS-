import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import Header from "../Components/header/Header";
import "../styles/scss/main.scss";

export const metadata: Metadata = {
  title: "Lime Studio",
  description: "web app on framefork Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
