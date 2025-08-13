import { Users, MapPin, Phone, Mail, Smartphone, Globe } from 'lucide-react';

export default function FortuneFooter() {
  return (
    <footer className="bg-base-color text-white py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-5 text-white font-medium">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 tracking-wide">
              THÔNG TIN SỞ HỮU WEBSITE
            </h2>

            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <Users
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                  strokeWidth={3}
                />
              </div>
              <span className="text-sm sm:text-base font-medium">
                Đội ngũ phát triển FORTUNE
              </span>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm">
              Copyright © 2025 FORTUNE. All Rights Reserved.
            </p>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 tracking-wide">
                HỖ TRỢ
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-full mt-0.5 shadow-sm flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm leading-relaxed text-gray-200">
                    88 Đỗ Xuân Hợp, P. Phước Long A, TP. Thủ Đức, TP. HCM
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Phone className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-200">
                      028 7464 7943
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Mail className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-200">
                      Support@wof.vn
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Smartphone
                        className="w-4 h-4 text-primary"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-200">
                      090 080 61 08
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Globe className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-200 break-all">
                      https://wof.vn
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 mt-3 md:mt-0 text-white font-medium block md:flex md:justify-center">
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 tracking-wide">
                THÔNG TIN KHÁC
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-200 hover:text-white transition-colors cursor-pointer">
                    Về FORTUNE
                  </h3>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-200 hover:text-white transition-colors cursor-pointer">
                    Hướng dẫn
                  </h3>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-200 hover:text-white transition-colors cursor-pointer">
                    Chính sách
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
