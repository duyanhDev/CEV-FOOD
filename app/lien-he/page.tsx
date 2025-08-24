import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react";

import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Điện thoại",
      details: ["Hotline: 0123 456 789", "Zalo: 0987 654 321"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@suatanpro.com", "sales@suatanpro.com"],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Địa chỉ",
      details: ["123 Đường Nguyễn Văn Cừ", "Quận 5, TP. Hồ Chí Minh"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Giờ làm việc",
      details: ["Thứ 2 - Thứ 6: 7:00 - 18:00", "Thứ 7: 7:00 - 12:00"],
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Doanh nghiệp tin tưởng",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "10+",
      label: "Năm kinh nghiệm",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      number: "50,000+",
      label: "Suất ăn mỗi ngày",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Liên Hệ
            <span className="text-orange-500 block">Suất Ăn Pro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn tìm ra giải pháp suất
            ăn tốt nhất cho doanh nghiệp
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">
                  Gửi yêu cầu tư vấn
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 24h
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input id="name" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Tên công ty *</Label>
                    <Input id="company" placeholder="Công ty ABC" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input id="phone" placeholder="0123 456 789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">Số lượng nhân viên</Label>
                  <Input id="employees" placeholder="Ví dụ: 150 nhân viên" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Yêu cầu cụ thể</Label>
                  <Textarea
                    id="message"
                    placeholder="Mô tả chi tiết về nhu cầu suất ăn của công ty..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Gửi yêu cầu tư vấn
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Thông tin liên hệ
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Bản đồ vị trí</p>
                      <p className="text-sm">
                        123 Đường Nguyễn Văn Cừ, Q.5, TP.HCM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần tư vấn ngay?</h2>
          <p className="text-xl mb-8 opacity-90">
            Gọi hotline để được hỗ trợ trực tiếp từ chuyên viên tư vấn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gọi ngay: 0123 456 789
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
            >
              <Mail className="h-5 w-5 mr-2" />
              Gửi email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
