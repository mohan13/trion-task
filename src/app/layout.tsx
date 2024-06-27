import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Navbars/sidebar";
import { Toolbar } from "@/components/Navbars/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental",
  description:
    "Rent a car without tedious process at an offerable price from us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Toolbar />
          {children}
        </div>
      </body>
    </html>
  );
}
