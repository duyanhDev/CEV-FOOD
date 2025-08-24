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
  Calendar,
  Utensils,
  Heart,
  Truck,
  DollarSign,
  Package,
  ThumbsUp,
  Timer,
  Home,
  ArrowLeft,
} from "lucide-react";

import Header from "./../../components/header";
import Footer from "@/components/footer";

// Định nghĩa type rõ ràng
interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}
interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  plans: Plan[];
}

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("van-phong");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories: Record<string, ServiceCategory> = {
    "van-phong": {
      title: "Suất Ăn Văn Phòng",
      subtitle: "Giải pháp dinh dưỡng cho môi trường làm việc hiện đại",
      description:
        "Cung cấp suất ăn trưa chất lượng cao, đa dạng thực đơn cho nhân viên văn phòng. Đảm bảo dinh dưỡng cân đối và hương vị hấp dẫn.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Thực đơn rotates 30 ngày không trùng lặp",
        "Giao hàng đúng giờ (11:30 - 12:00)",
        "Bao bì thân thiện môi trường",
        "Có tùy chọn ăn chay/ăn kiêng",
        "Đảm bảo cân đối dinh dưỡng",
        "Phục vụ từ 20-500 suất/ngày",
      ],
      plans: [
        {
          name: "Gói Cơ Bản",
          price: "45,000",
          description: "1 phần cơm + 2 món mặn + 1 món canh",
          features: [
            "Cơm trắng/cơm gạo lứt",
            "2 món mặn (thịt + rau)",
            "1 món canh/súp",
            "Nước suối miễn phí",
            "Giao hàng trong giờ hành chính",
          ],
          popular: false,
        },
        {
          name: "Gói Tiêu Chuẩn",
          price: "65,000",
          description: "1 phần cơm + 3 món mặn + canh + tráng miệng",
          features: [
            "Cơm trắng/cơm gạo lứt",
            "3 món mặn đa dạng",
            "1 món canh/súp đặc biệt",
            "Tráng miệng (chè/trái cây)",
            "Nước uống đa dạng",
            "Có tùy chọn ăn chay",
            "Giao hàng linh hoạt",
          ],
          popular: true,
        },
        {
          name: "Gói Premium",
          price: "85,000",
          description: "Set ăn cao cấp với nguyên liệu tươi ngon nhất",
          features: [
            "Cơm đặc biệt (cơm dẻo/cơm rang)",
            "4 món mặn cao cấp",
            "Canh/súp đặc biệt",
            "Tráng miệng premium",
            "Nước ép trái cây tươi",
            "Salad tươi",
            "Menu cá nhân hóa",
            "Giao hàng VIP",
          ],
          popular: false,
        },
      ],
    },
    "cong-nhan": {
      title: "Suất Ăn Công Nhân",
      subtitle: "Bữa ăn bổ dưỡng cho lao động chân tay",
      description:
        "Khẩu phần ăn lớn, giàu năng lượng, phù hợp với công nhân lao động nặng. Đảm bảo vệ sinh an toàn thực phẩm tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Khẩu phần lớn, đầy đủ năng lượng",
        "Giá cả phải chăng, tiết kiệm chi phí",
        "Đảm bảo ATTP theo chuẩn HACCP",
        "Menu phù hợp khẩu vị Việt Nam",
        "Giao hàng tại khu công nghiệp",
        "Phục vụ từ 100-5000 suất/ngày",
      ],
      plans: [
        {
          name: "Gói Công Nhân",
          price: "35,000",
          description: "Bữa ăn đầy đủ chất dinh dưỡng cho công nhân",
          features: [
            "Cơm nhiều (300-350g)",
            "2 món mặn thịnh soạn",
            "1 món canh đậm đà",
            "Rau muối/dưa chua",
            "Nước lọc miễn phí",
            "Phù hợp lao động nặng",
          ],
          popular: true,
        },
        {
          name: "Gói Tổ Trưởng",
          price: "45,000",
          description: "Bữa ăn nâng cao cho cán bộ quản lý",
          features: [
            "Cơm chất lượng cao",
            "3 món mặn đa dạng",
            "Canh/súp bổ dưỡng",
            "Rau củ tươi ngon",
            "Nước ngọt/trà đá",
            "Tráng miệng nhẹ",
            "Bao bì cao cấp hơn",
          ],
          popular: false,
        },
        {
          name: "Gói Tập Thể",
          price: "30,000",
          description: "Giải pháp tiết kiệm cho số lượng lớn",
          features: [
            "Cơm đầy đủ (250g)",
            "2 món mặn cơ bản",
            "1 món canh/súp",
            "Nước lọc",
            "Giá ưu đãi số lượng lớn",
            "Giao hàng tập trung",
          ],
          popular: false,
        },
      ],
    },
    "ca-dem": {
      title: "Suất Ăn Ca Đêm",
      subtitle: "Phục vụ 24/7 cho ca làm việc đêm",
      description:
        "Dịch vụ cung cấp suất ăn đêm cho các khu công nghiệp, bệnh viện, bảo vệ và các ngành nghề làm việc ca đêm.",
      image:
        "https://images.unsplash.com/photo-1558618666-c7299b76d3c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Phục vụ 24/7, kể cả ngày lễ",
        "Menu phù hợp với ca đêm",
        "Giữ nhiệt tốt trong suốt quá trình vận chuyển",
        "Đóng gói cẩn thận, an toàn",
        "Giao hàng đúng giờ ca làm việc",
        "Tư vấn dinh dưỡng cho ca đêm",
      ],
      plans: [
        {
          name: "Gói Ca Đêm Cơ Bản",
          price: "40,000",
          description: "Bữa ăn nhẹ phù hợp với ca đêm",
          features: [
            "Cơm hoặc cháo/phở",
            "2 món mặn nhẹ nhàng",
            "Canh thanh mát",
            "Nước ấm miễn phí",
            "Giữ nhiệt 4-6 tiếng",
            "Phù hợp tiêu hóa đêm",
          ],
          popular: false,
        },
        {
          name: "Gói Ca Đêm Plus",
          price: "55,000",
          description: "Bữa ăn đầy đủ cho ca đêm dài",
          features: [
            "Lựa chọn cơm/bún/phở",
            "3 món mặn cân bằng",
            "Canh/súp bổ dưỡng",
            "Chè/tráng miệng",
            "Nước uống đa dạng",
            "Thêm bánh mì phụ",
            "Hộp giữ nhiệt cao cấp",
          ],
          popular: true,
        },
        {
          name: "Gói Đêm Premium",
          price: "70,000",
          description: "Combo đêm cao cấp với đồ ăn đặc biệt",
          features: [
            "Menu đặc biệt cho đêm",
            "4 món mặn cao cấp",
            "Súp bổ dưỡng",
            "Tráng miệng premium",
            "Cà phê/trà sữa",
            "Bánh ngọt kèm theo",
            "Dịch vụ giao hàng VIP",
            "Tư vấn dinh dưỡng",
          ],
          popular: false,
        },
      ],
    },
  };

  const additionalServices = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Catering Sự Kiện",
      description: "Phục vụ tiệc công ty, hội nghị, sự kiện với menu đa dạng",
      price: "Từ 120,000đ/người",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Đặt Món Theo Yêu Cầu",
      description: "Tùy chỉnh menu theo sở thích và yêu cầu dinh dưỡng",
      price: "Báo giá riêng",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Menu Ăn Kiêng",
      description: "Suất ăn đặc biệt cho người tiểu đường, ăn kiêng",
      price: "Từ 70,000đ/suất",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Gói Tháng/Năm",
      description: "Ưu đãi đặc biệt cho hợp đồng dài hạn",
      price: "Giảm 10-20%",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "An toàn tuyệt đối",
      description: "Chứng nhận HACCP, ISO 22000",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Giao hàng đúng giờ",
      description: "99.9% đúng thời gian cam kết",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Hài lòng 100%",
      description: "Cam kết đổi trả nếu không hài lòng",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Giá cả cạnh tranh",
      description: "Tiết kiệm 20-30% so với mặt bằng chung",
    },
  ];

  const currentService = serviceCategories[activeTab];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dịch Vụ Suất Ăn{" "}
            <span className="text-orange-200">Chuyên Nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Cung cấp giải pháp suất ăn toàn diện cho mọi nhu cầu của doanh
            nghiệp
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              Chất lượng đảm bảo
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Timer className="w-5 h-5 mr-2" />
              Giao hàng đúng giờ
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 mr-2" />
              An toàn vệ sinh
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {Object.entries(serviceCategories).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 mx-2 mb-4 rounded-t-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? "bg-orange-500 text-white shadow-lg -mb-px border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {currentService.title}
              </h2>
              <p className="text-xl text-orange-600 mb-6">
                {currentService.subtitle}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {currentService.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                Tư vấn ngay <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="bang-gia" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Bảng Giá {currentService.title}
            </h2>
            <p className="text-xl text-gray-600">
              Chọn gói phù hợp với nhu cầu của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentService.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? "ring-4 ring-orange-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">đ/suất</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    Chọn gói này
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dịch Vụ Khác
            </h2>
            <p className="text-xl text-gray-600">
              Các dịch vụ bổ sung để đáp ứng mọi nhu cầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(service.icon, {
                    className: "text-white",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <p className="text-orange-500 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tại Sao Chọn VietFood?
            </h2>
            <p className="text-xl text-gray-600">
              Những cam kết của chúng tôi với khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  {React.cloneElement(item.icon, {
                    className:
                      "text-orange-500 group-hover:text-white transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="lien-he"
        className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bắt Đầu Ngay Hôm Nay!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt
            nhất
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 bg-white/20 p-4 rounded-lg">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">Hotline</p>
                <p>0900 123 456</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/20 p-4 rounded-lg">
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-semibold">Email</p>
                <p>info@vietfood.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/20 p-4 rounded-lg">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-semibold">Địa chỉ</p>
                <p>123 Đường ABC, Q.XYZ</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                alert(
                  "Cảm ơn bạn quan tâm! Chúng tôi sẽ liên hệ trong vòng 30 phút."
                )
              }
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Gọi tư vấn ngay
            </button>
            <button
              onClick={() =>
                alert("Form đặt hàng sẽ được gửi qua email của bạn!")
              }
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Đặt hàng online
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quy Trình Đặt Hàng
            </h2>
            <p className="text-xl text-gray-600">
              4 bước đơn giản để có suất ăn chất lượng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Liên Hệ Tư Vấn
              </h3>
              <p className="text-gray-600">
                Gọi hotline hoặc gửi yêu cầu online để được tư vấn miễn phí
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chọn Gói Dịch Vụ
              </h3>
              <p className="text-gray-600">
                Lựa chọn gói suất ăn phù hợp với nhu cầu và ngân sách
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Ký Hợp Đồng
              </h3>
              <p className="text-gray-600">
                Thống nhất điều khoản và ký hợp đồng cung cấp suất ăn
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Giao Hàng
              </h3>
              <p className="text-gray-600">
                Nhận suất ăn tươi ngon đúng giờ theo cam kết
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-xl text-gray-600">
              Giải đáp những thắc mắc phổ biến của khách hàng
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Thời gian giao hàng như thế nào?",
                a: "Chúng tôi giao hàng đúng khung giờ cam kết: 11:30-12:00 cho suất ăn trưa, 17:30-18:00 cho suất ăn chiều và 22:00-23:00 cho ca đêm.",
              },
              {
                q: "Có thể thay đổi thực đơn theo yêu cầu không?",
                a: "Có thể. Chúng tôi có thể tùy chỉnh thực đơn theo sở thích, yêu cầu dinh dưỡng hoặc hạn chế ăn uống của khách hàng.",
              },
              {
                q: "Làm thế nào để đảm bảo vệ sinh an toàn thực phẩm?",
                a: "Chúng tôi đạt chứng nhận HACCP và ISO 22000. Toàn bộ quy trình từ chế biến đến giao hàng đều được kiểm soát nghiêm ngặt.",
              },
              {
                q: "Có ưu đãi cho hợp đồng dài hạn không?",
                a: "Có. Khách hàng ký hợp đồng từ 6 tháng trở lên sẽ được giảm 10-20% và nhiều ưu đãi khác.",
              },
              {
                q: "Số lượng suất ăn tối thiểu là bao nhiêu?",
                a: "Tùy thuộc vào khu vực: Nội thành từ 20 suất/ngày, ngoại thành và khu công nghiệp từ 50 suất/ngày.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => alert("Kết nối với tư vấn viên...")}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>

      {/* Selected Plan Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Xác Nhận Đặt Hàng
            </h3>
            <p className="text-gray-600 mb-2">
              Bạn đã chọn: <strong>{selectedPlan.name}</strong>
            </p>
            <p className="text-orange-500 text-2xl font-bold mb-6">
              {selectedPlan.price}đ/suất
            </p>
            <p className="text-gray-600 mb-6">
              Chúng tôi sẽ liên hệ với bạn trong vòng 15 phút để xác nhận đơn
              hàng và thỏa thuận chi tiết.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  alert(
                    `Cảm ơn bạn đã chọn ${selectedPlan.name}! Chúng tôi sẽ liên hệ ngay.`
                  );
                  setSelectedPlan(null);
                }}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-colors"
              >
                Xác nhận
              </button>
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-full font-semibold transition-colors"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
