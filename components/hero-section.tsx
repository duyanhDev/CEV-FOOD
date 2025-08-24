import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Dịch Vụ Suất Ăn <span className="text-orange-300">Công Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Cung cấp suất ăn chất lượng cao cho doanh nghiệp, khu công nghiệp
            <br />
            Đảm bảo dinh dưỡng, an toàn vệ sinh thực phẩm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Liên Hệ Ngay <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Xem Thực Đơn
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
