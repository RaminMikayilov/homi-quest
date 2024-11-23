import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar/Navbar";
import Providers from "@/providers/Providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomiQuest",
  description: "A place to find your next home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
