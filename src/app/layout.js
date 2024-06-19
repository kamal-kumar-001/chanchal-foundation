import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chanchal Veer Foundation",
  description: "Chanchal Veer Foundation, Haryana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#ff5722"
          initialPosition={0.08}
          height={2}
          easing="ease"
        />
        {children}
      </body>
    </html>
  );
}
