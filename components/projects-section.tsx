import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI LUXGROUP",
    location: "Khu 1A, Xã Quang Minh, Mê Linh, Hà Nội, Việt Nam",
    image: "/placeholder-nfodh.png",
  },
  {
    title: "CÔNG TY TNHH FUJIKURA COMPOSITES HAI PHONG",
    location: "Khu 1A và Xã Đông Hải Phòng VSIP Hải Phòng - Việt Nam",
    image: "/placeholder-bzi9v.png",
  },
  {
    title: "CÔNG TY TNHH CALOFIC",
    location: "Khu vực Cầu Cát Lái, Phường Bình Khánh, Quận 2, Thành phố Hồ Chí Minh, Tỉnh Đồng Nai",
    image: "/placeholder-x5qc5.png",
  },
  {
    title: "CÔNG TY TNHH EUREKA KAGAKU VIETNAM",
    location: "Lô đất số 9, Khu công nghiệp Đình Vũ, Hải Phòng",
    image: "/placeholder-7j38h.png",
  },
  {
    title: "CÔNG TY TNHH ARION ELECTRIC VIET NAM",
    location: "Khu công nghiệp Đình Vũ, Hải Phòng",
    image: "/placeholder-458vd.png",
  },
  {
    title: "NHÀ MÁY NHIỆT ĐIỆN THÁI BÌNH 2",
    location: "Xã Đông Hòa, Huyện Đông Hưng, Tỉnh Thái Bình",
    image: "/placeholder-o2iyr.png",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DỰ ÁN ĐÃ THỰC HIỆN</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
