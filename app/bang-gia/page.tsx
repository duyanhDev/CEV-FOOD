import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Clock, Shield } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Gói Cơ Bản",
      description: "Phù hợp cho doanh nghiệp nhỏ 50-100 nhân viên",
      price: "45,000",
      unit: "VNĐ/suất",
      popular: false,
      features: [
        "1 món chính + 2 món phụ",
        "Cơm trắng + canh",
        "Giao hàng 1 lần/ngày",
        "Menu thay đổi hàng tuần",
        "Hỗ trợ khách hàng cơ bản",
      ],
    },
    {
      name: "Gói Tiêu Chuẩn",
      description: "Lý tưởng cho doanh nghiệp vừa 100-300 nhân viên",
      price: "55,000",
      unit: "VNĐ/suất",
      popular: true,
      features: [
        "2 món chính + 3 món phụ",
        "Cơm trắng + canh + tráng miệng",
        "Giao hàng 2 lần/ngày",
        "Menu đa dạng thay đổi 3 ngày/lần",
        "Tùy chọn món chay",
        "Hỗ trợ khách hàng ưu tiên",
      ],
    },
    {
      name: "Gói Cao Cấp",
      description: "Dành cho doanh nghiệp lớn 300+ nhân viên",
      price: "75,000",
      unit: "VNĐ/suất",
      popular: false,
      features: [
        "3 món chính + 4 món phụ",
        "Cơm trắng + canh + tráng miệng + nước uống",
        "Giao hàng linh hoạt theo yêu cầu",
        "Menu cao cấp thay đổi hàng ngày",
        "Tùy chọn món chay & ăn kiêng",
        "Đầu bếp chuyên nghiệp",
        "Hỗ trợ 24/7",
      ],
    },
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Phục vụ hàng nghìn suất ăn",
      description:
        "Kinh nghiệm phục vụ các doanh nghiệp lớn với quy mô từ 50-5000 nhân viên",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "An toàn thực phẩm",
      description:
        "Đạt chứng nhận HACCP, ISO 22000 về an toàn vệ sinh thực phẩm",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Giao hàng đúng giờ",
      description:
        "Cam kết giao hàng đúng giờ với đội ngũ logistics chuyên nghiệp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Bảng Giá Dịch Vụ
            <span className="text-orange-500 block">Suất Ăn Công Nghiệp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với quy mô doanh nghiệp của bạn. Chất
            lượng cao, giá cả hợp lý, phục vụ chuyên nghiệp.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-orange-500" />
              <span>Miễn phí giao hàng</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-orange-500" />
              <span>Không ký hợp đồng dài hạn</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-orange-500" />
              <span>Dùng thử 1 tuần miễn phí</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white border-gray-200 ${
                  plan.popular ? "border-orange-500 shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Phổ biến nhất
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-black">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "border-orange-500 text-orange-500 hover:bg-orange-50"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Chọn gói này
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến
              dịch vụ suất ăn chất lượng cao nhất.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl mb-8 opacity-90">
            Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              Gọi ngay: 0123 456 789
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
            >
              Nhận báo giá
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
