import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mostrans",
  description: "Mostrans Technical",
  name: "viewport",
  content: "viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="garden">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
