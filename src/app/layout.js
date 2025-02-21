import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Talent Wave - Transformative Digital Solutions",
  description: "Pioneering digital experiences that drive business growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <a
          href="https://wa.me/7652027126"
          className="fixed bottom-4 right-4 z-20 bg-green-500 text-white p-3 rounded-full shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
      </body>
    </html>
  );
}
