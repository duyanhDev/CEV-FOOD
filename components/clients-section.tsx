const clients = [
  {
    name: "Canon",
    logo: "/placeholder-mcfkv.png",
  },
  {
    name: "EVN",
    logo: "/placeholder-8flwd.png",
  },
  {
    name: "Fujikura",
    logo: "/placeholder-11txy.png",
  },
]

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">KHÁCH HÀNG TIÊU BIỂU</h2>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`Logo ${client.name}`}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${index === 0 ? "bg-orange-500" : "bg-gray-300"}`}></div>
          ))}
        </div>
      </div>
    </section>
  )
}
