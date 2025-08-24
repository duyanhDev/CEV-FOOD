"use client";
import React, { useState, useEffect } from "react";
import {
  ChefHat,
  Users,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import Header from "./../components/header";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";

export default function IndustrialCateringLanding() {
  const services = [
    {
      icon: <ChefHat className="w-12 h-12 text-orange-500" />,
      title: "Suất Ăn Văn Phòng",
      description:
        "Cung cấp suất ăn dinh dưỡng, đa dạng thực đơn cho nhân viên văn phòng",
      features: [
        "Thực đơn 30 ngày",
        "Giao hàng đúng giờ",
        "Bao bì thân thiện môi trường",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Suất Ăn Công Nhân",
      description: "Bữa ăn bổ dưỡng, phù hợp với lao động chân tay nặng nhọc",
      features: ["Khẩu phần lớn", "Giá cả phải chăng", "Đảm bảo vệ sinh ATTP"],
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Suất Ăn Ca Đêm",
      description: "Phục vụ 24/7 cho các khu công nghiệp làm việc nhiều ca",
      features: ["Phục vụ đêm", "Giữ nhiệt tốt", "Menu phù hợp ca đêm"],
    },
  ];

  const advantages = [
    {
      icon: <Shield />,
      title: "An Toàn Vệ Sinh",
      desc: "Đạt chuẩn ISO 22000, HACCP",
    },
    {
      icon: <Award />,
      title: "Chất Lượng Cao",
      desc: "Nguyên liệu tươi ngon, chế biến khoa học",
    },
    {
      icon: <Users />,
      title: "Phục Vụ Lớn",
      desc: "Có thể phục vụ từ 100 - 10,000 suất/ngày",
    },
    {
      icon: <Clock />,
      title: "Giao Hàng Đúng Giờ",
      desc: "Cam kết giao hàng đúng thời gian",
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn Nam",
      position: "Giám đốc nhân sự - Công ty TNHH ABC",
      content:
        "Dịch vụ suất ăn chất lượng cao, nhân viên rất hài lòng với thực đơn đa dạng và ngon miệng.",
      rating: 5,
    },
    {
      name: "Trần Thị Mai",
      position: "Quản lý hành chính - Nhà máy XYZ",
      content:
        "Giao hàng đúng giờ, đóng gói cẩn thận, giá cả hợp lý. Đã hợp tác được 2 năm rất tin tưởng.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />
      <HeroSection />
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Khách Hàng Tin Tưởng</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
              <div className="text-gray-600">Suất Ăn Mỗi Ngày</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-500 mb-2">15+</div>
              <div className="text-gray-600">Năm Kinh Nghiệm</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-purple-500 mb-2">
                100%
              </div>
              <div className="text-gray-600">An Toàn Vệ Sinh</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="dịch-vụ" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cung cấp đa dạng các gói suất ăn phù hợp với mọi nhu cầu của doanh
              nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0
                        ? "1565299624946-b28f40a0ca4b"
                        : index === 1
                        ? "1567620905732-2d1ec7ab7445"
                        : "1558618666-c7299b76d3c6"
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="ưu-điểm" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những ưu điểm vượt trội giúp chúng tôi trở thành đối tác tin cậy
              của hơn 1000 doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(advantage.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="khách-hàng" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Khách Hàng Nói Gì?
            </h2>
            <p className="text-xl text-gray-600">
              Phản hồi từ những khách hàng đã tin tưởng sử dụng dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và báo giá tốt nhất cho doanh
            nghiệp của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Liên Hệ Tư Vấn
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Tải Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="liên-hệ" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hãy để chúng tôi tư vấn giải pháp suất ăn tốt nhất cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    Hotline
                  </h3>
                  <p className="text-gray-600">0979681244</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                  <p className="text-gray-600">info@vietfoodcatering.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    Địa chỉ
                  </h3>
                  <p className="text-gray-600">
                    123 Đường ABC, Quận XYZ, TP.HCM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Gửi Yêu Cầu Tư Vấn
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  placeholder="Công ty"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
                <textarea
                  placeholder="Nội dung yêu cầu tư vấn"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                ></textarea>
                <button
                  onClick={() =>
                    alert(
                      "Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất."
                    )
                  }
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Gửi Yêu Cầu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
