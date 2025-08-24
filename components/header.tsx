"use client";
import { useEffect, useState } from "react";

import { Menu, X, ChefHat, Home } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChefHat className="w-8 h-8 text-orange-500" />
          <span className="font-bold text-xl text-gray-800">
            CEV FOOD Catering
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-orange-500 font-semibold">
            Trang chủ
          </Link>
          <Link href="/dich-vu" className="text-orange-500 font-semibold">
            Dịch vụ
          </Link>
          <Link
            href="/bang-gia"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            Bảng giá
          </Link>
          <Link
            href="/lien-he"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            Liên hệ
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
            Đặt ngay
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              className="flex items-center w-full py-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Trang chủ
            </Link>
            <Link
              href="/dich-vu"
              className="block py-2 text-orange-500 font-semibold"
            >
              Dịch vụ
            </Link>
            <Link
              href="/bang-gia"
              className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              Bảng giá
            </Link>
            <Link
              href="/lien-he"
              className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
