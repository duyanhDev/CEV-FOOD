import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Building, GraduationCap } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Cung cấp suất ăn công nghiệp",
    description:
      "Suất ăn công nghiệp chất lượng cao dành cho các nhà máy, xí nghiệp với đa dạng thực đơn, đảm bảo dinh dưỡng cho người lao động.",
    image: "/placeholder-sv8vl.png",
  },
  {
    icon: Building,
    title: "Dịch vụ nhà hàng",
    description:
      "Chuỗi nhà hàng khép kín cung cấp các món ăn đa dạng, phù hợp với khẩu vị của từng khu vực, đảm bảo vệ sinh an toàn thực phẩm.",
    image: "/placeholder-2zndc.png",
  },
  {
    icon: GraduationCap,
    title: "Dịch vụ cung cấp thực phẩm",
    description:
      "Cung cấp nguyên liệu thực phẩm tươi sống chất lượng cao, đa dạng các loại thịt, cá, rau củ quả tươi ngon, đảm bảo nguồn gốc xuất xứ.",
    image: "/placeholder-zbnat.png",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đơn vị cung cấp suất ăn công nghiệp, suất ăn trường học Uy tín, Chất lượng
          </h2>
          <h3 className="text-xl text-orange-600 font-semibold">DỊCH VỤ CỦA STAVI</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
            Xem thêm
          </Button>
        </div>
      </div>
    </section>
  )
}
