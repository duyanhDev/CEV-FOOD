const stats = [
  { number: "15+", label: "Năm kinh nghiệm", color: "text-green-500" },
  { number: "850+", label: "Khách hàng", color: "text-orange-500" },
  { number: "50+", label: "Khoản đầu tư triệu đô", color: "text-green-500" },
  { number: "35+", label: "Cơ sở sản xuất", color: "text-orange-500" },
  { number: "420+", label: "Suất ăn được cung cấp hàng ngày", color: "text-green-500" },
  { number: "3+", label: "Năm đồng hành cùng 3 miền", color: "text-orange-500" },
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1200&query=professional kitchen with chefs cooking industrial meals)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">QUY MÔ STAVI</h2>
            <p className="text-lg leading-relaxed mb-8">
              Với gần 15 năm kinh nghiệm trong lĩnh vực cung cấp suất ăn công nghiệp và nhà hàng tại Việt Nam, STAVI tự
              hào là đơn vị hàng đầu trong việc cung cấp các dịch vụ ăn uống chất lượng cao. Chúng tôi đã phục vụ hàng
              trăm doanh nghiệp và trường học trên khắp cả nước, mang đến những bữa ăn ngon miệng và đầy đủ dinh dưỡng.
            </p>

            <div className="w-32 h-32 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 100 100" className="w-20 h-20 fill-white">
                <path d="M20,80 L20,20 L80,20 L80,80 Z M30,30 L30,70 L70,70 L70,30 Z" />
                <circle cx="35" cy="35" r="2" />
                <circle cx="45" cy="35" r="2" />
                <circle cx="55" cy="35" r="2" />
                <circle cx="65" cy="35" r="2" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
