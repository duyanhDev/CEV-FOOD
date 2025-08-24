import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <span className="font-bold text-xl">CEV FOOD Catering</span>
            </div>
            <p className="text-gray-300 mb-4">
              Đối tác tin cậy cung cấp suất ăn công nghiệp chất lượng cao cho
              doanh nghiệp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Suất ăn văn phòng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Suất ăn công nhân
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Suất ăn ca đêm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Catering sự kiện
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Thông Tin</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Chứng nhận
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liên Hệ</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 0979681244</p>
              <p>✉️ trinhxuankien1808@gmail.com</p>
              <p>📍 123 Đường ABC, Quận XYZ, TP.Hà Nội</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 VietFood Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
