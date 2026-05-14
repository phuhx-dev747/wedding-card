import { Mousewheel, Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import images from "../assets/image";
import { useEffect, useState } from "react";

export default function MainSwiper() {
  const [showQRCode, setShowQRCode] = useState(false);

  const getCountDown = () => {
    const targetDate = new Date('2026-05-22T09:00:00');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(getCountDown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountDown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Swiper
      direction="vertical"
      speed={1200}
      allowTouchMove
      slidesPerView={1}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true,
        sensitivity: 0.5,
      }}
      navigation={true}
      parallax={true}
      modules={[Mousewheel, Pagination, Parallax, Navigation]}
      className="h-screen"
    >
      {/* BACKGROUND */}
      <div
        slot="container-start"
        className="absolute inset-0 z-0 scale-110"
        data-swiper-parallax="-200%"
      >
        {/* blur background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-xl scale-125"
          style={{
            backgroundImage:
              `url(${images.background2})`,
          }}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* sharp center image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={images.background2}
            className="h-screen w-screen object-contain rounded-3xl rotate-90 scale-200 lg:rotate-0 lg:scale-100"
          />
        </div>
      </div>

      {/* SLIDE 1 */}
      <SwiperSlide>
        <div
          className="relative z-10 h-screen flex flex-col items-center justify-center text-white"
        >
          <div className="absolute h-1/2 lg:h-4/5 top-0 border-[#f4a57a] border lg:border-0 border-b-0 lg:left-8 left-[calc(100vw-3rem)] flex justify-center items-end lg:items-start lg:top-1/4">
            <span data-swiper-parallax="-1600" className="absolute p-2 py-3 bg-[#f4a57a] rounded-full font-bold text-red-700 shadow-2xl artisan-font">P<span className="">❤</span> D</span>
          </div>
          <div
            className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl px-8 py-6 relative"
            data-swiper-parallax="-400%"
            data-swiper-parallax-opacity="0.5"
          >
            <h1
              data-swiper-parallax="-300"
              className="text-5xl min-w-full md:w-auto md:text-7xl grid md:grid-cols-3 items-center gap-4 text-[#f4a57a] drop-shadow-lg drop-shadow-black/50 ephesis-font font-bold"
            >
              <span className="lg:text-4xl text-3xl whitespace-nowrap md:text-right">Phú Hoàng</span>
              <span className="lg:text-6xl text-3xl font-bold"> & </span>
              <span className="lg:text-4xl text-3xl whitespace-nowrap md:text-left">Duyên Nguyễn</span>
              <img src={images.cap2} className="absolute lg:w-48! w-32! h-auto! -top-28 md:-top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </h1>
          </div>

          <p
            data-swiper-parallax="-150"
            className="mt-6 text-2xl lg:text-3xl tracking-[0.2em] uppercase text-[#f4a57a] font-bold drop-shadow-2xl drop-shadow-amber-600 bg-[#f4a57a]/30 rounded-full px-6 py-2 ephesis-font text-shadow-lg text-shadow-black/40"
          >
            22 . 05 . 2026
          </p>
        </div>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>
        <div className="relative z-10 h-screen text-red-700 " style={{ background: `url(${images.background3}) right / cover no-repeat` }}>
          <div className="artisan-font">
            <img src={images.goc} className="absolute lg:w-28! w-16! h-auto! rotate-90 top-5 left-5" />
            <img src={images.goc} className="absolute lg:w-28! w-16! h-auto! rotate-180 top-5 right-5" />
            <img src={images.goc} className="absolute lg:w-28! w-16! h-auto! bottom-5 left-5" />
            <img src={images.goc} className="absolute lg:w-28! w-16! h-auto! -rotate-90 bottom-5 right-5" />

            {/* vertical text P&D */}
            <div className="hidden lg:flex absolute h-1/2 top-1/4 border-red-700 border-2 right-8 items-center justify-center">
              <span data-swiper-parallax="-600" className="absolute p-2 py-3 bg-red-700 rounded-full font-bold text-white">P <span className="">❤</span> D</span>
            </div>

            {/* horizontal text */}
            <div
              data-swiper-parallax={window.innerHeight - 50}
              data-swiper-parallax-opacity="0"
              className="lg:hidden flex absolute w-1/2 bottom-6 mx-auto border-red-700 border left-1/4 items-center justify-center"
            >
              <span className="absolute p-3 py-1 bg-red-700 rounded-full font-bold text-white ">P <span className="">❤</span> D</span>
            </div>
          </div>

          <div
            className="w-full text-center font-bold pt-4 lg:pt-8 text-xl md:text-3xl leading-relaxed text-[#aa000d]"
          >
            <img src={images.saveTheDate} alt="saveTheDate" className="w-30! md:w-50! pb-5 mx-auto z-30" />
          </div>
          <div
            className="grid grid-cols-2 justify-center md:gap-16 gap-8 w-full relative"
            data-swiper-parallax="-100"
          >
            <div className="text-right">
              <p className="md:text-3xl ms:text-2xl text-lg font-bold ephesis-font">Nhà Trai</p>
              <p className="md:text-2xl ms:text-xl text-base uppercase lora-font">Hoàng Văn Phong</p>
              <p className="md:text-2xl ms:text-xl text-base uppercase lora-font">Phạm Thị Hà</p>
              <p className="md:text-lg ms:text-base text-sm text-[#8B7355] lora-font">138 Ea Đinh, xã Dliê Ya<br />tỉnh Đắk Lắk</p>
            </div>
            <div className="text-left">
              <p className="md:text-3xl ms:text-2xl text-lg font-bold ephesis-font">Nhà Gái</p>
              <p className="md:text-2xl ms:text-xl text-base uppercase lora-font">Nguyễn Đức Triệu</p>
              <p className="md:text-2xl ms:text-xl text-base uppercase lora-font">Mai Thị Huệ</p>
              <p className="md:text-lg text-base text-[#8B7355] lora-font">Thôn 9, xã Ea Súp<br />tỉnh Đắk Lắk</p>
            </div>

            <img src={images.cauTrau} className="absolute right-20 bottom-0 w-40! h-auto! lg:block! hidden!" />
          </div>

          <div className="md:py-3 py-2" data-swiper-parallax="-150">
            <p className="md:text-xl text-base text-center lora-font">
              Trân Trọng Báo Tin <strong>LỄ TÂN HÔN</strong> Của Con Chúng Tôi <br />
            </p>
          </div>

          <div
            data-swiper-parallax="-200"
            className="md:mx-16 mx-4 lg:bg-top-left bg-bottom-left"
            style={{ backgroundImage: `url(${images.cap})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto 70%' }}
          >
            <div
              className="flex flex-col md:w-150 md:mx-auto! mt-3 px-6 bg-amber-500/50 rounded-lg py-4 relative"
              style={{ backgroundImage: `url(${images.goc})`, backgroundPosition: 'bottom right', backgroundSize: 'auto 120px', backgroundRepeat: 'no-repeat' }}
            >
              <div className="text-left">
                <p className="md:text-3xl text-2xl font-bold italic ephesis-font">Hoàng Xuân Phú</p>
                <p className="text-xl ephesis-font">Quý Nam</p>
              </div>
              <div className="md:text-2xl text-base md:mb-4 font-bold ephesis-font">____ & ____</div>
              <div className="text-right">
                <p className="md:text-3xl text-2xl font-bold italic ephesis-font">Nguyễn Thị Duyên</p>
                <p className="text-xl ephesis-font">Út Nữ</p>
              </div>
              <div className="text-right mt-4 lora-font">
                <p className="md:text-xl text-base text-[#6B4F3A]">Hôn lễ sẽ được cử hành tại <b>TƯ GIA NHÀ TRAI</b></p>
                <p className="text-xl font-bold text-red-700">09:00 | Thứ 6 | 22.05.2026</p>
                <p className="text-sm text-[#6B4F3A]">(Âm lịch: 06 Tháng 04 năm Bính Ngọ)</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full pb-12 lora-font">
            <div data-swiper-parallax="-1000" id="countdown" className="text-center mt-4 border-y-0 border-red-600 rounded-lg">
                <p className="text-xl text-[#8B7355]">Đếm Ngược</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <p className="md:text-4xl text-2xl font-bold text-[#6B4F3A] ephesis-font">{countdown.days}</p>
                    <p className="text-sm text-[#6B4F3A]">Ngày</p>
                  </div>
                  <div className="text-center">
                    <p className="md:text-4xl text-2xl font-bold text-[#6B4F3A] ephesis-font">{countdown.hours}</p>
                    <p className="text-sm text-[#6B4F3A]">Giờ</p>
                  </div>
                  <div className="text-center">
                    <p className="md:text-4xl text-2xl font-bold text-[#6B4F3A] ephesis-font">{countdown.minutes}</p>
                    <p className="text-sm text-[#6B4F3A]">Phút</p>
                  </div>
                  <div className="text-center">
                    <p className="md:text-4xl text-2xl font-bold text-[#6B4F3A] ephesis-font">{countdown.seconds ? countdown.seconds : '00'}</p>
                    <p className="text-sm text-[#6B4F3A]">Giây</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </SwiperSlide>

      {/* SLIDE 3 */}
      <SwiperSlide>
        <div className="relative z-0 h-screen w-screen flex bg-red-700">
          <div
            data-swiper-parallax="-150"
            className="w-full px-4 pt-6 border border-red-700 rounded-2xl m-2 md:m-4 flex flex-col items-center gap-4 text-red-700 overflow-hidden lora-font"
            style={{ backgroundImage: `url(${images.background3}), url(${images.cap3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
            <img src={images.saveDate} className="w-30! h-30!" />
            <p className="md:text-2xl text-base text-left md:text-center text-[#8B7355]">TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH<br />
              ĐẾN DỰ BUỔI TIỆC CHUNG VUI CÙNG GIA ĐÌNH CHÚNG TÔI TẠI</p>
            <p>
              <p className="md:text-4xl text-lg font-bold">TƯ GIA NHÀ TRAI</p>
              <p className="md:text-2xl text-base">Địa chỉ: 138 Ea Đinh, xã Dliê Ya, Tỉnh Đắk Lắk</p>
            </p>
            <p className="text-[#C9A46A]">
              <p className="md:text-2xl text-base font-bold">11 Giờ 00 / Thứ Sáu</p>
              <p className="md:text-4xl text-2xl font-bold">22.05.2026</p>
              <p className="text-sm">(Âm lịch: 06 Tháng 04 năm Bính Ngọ)</p>
            </p>
            <div data-swiper-parallax="-150" style={{ width: '400px', height: '200px', zIndex: 100 }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d242.85916544122463!2d108.3147104124339!3d13.115229927614513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zZWEgdMOibiBrcsO0bmcgbsSDbmcgxJHhuq9rIGzhuq9r!5e0!3m2!1svi!2s!4v1778685041735!5m2!1svi!2s" width="400" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="absolute bottom-4 flex justify-center w-full flex-col items-center lora-font">
            <p className="md:text-xl text-base font-bold text-center mb-4 text-red-700">
              <span>SỰ HIỆN DIỆN CỦA QUÝ KHÁCH</span>
              <br />
              <span>LÀ NIỀM VINH HẠNG CHO GIA ĐÌNH CHÚNG TÔI</span>
            </p>
            <button
              className="bg-[#C9A46A] text-white font-bold px-6 py-2 rounded-full w-75 hover:bg-[#a88a52] transition-colors lora-font"
              onClick={() => {
                setShowQRCode(true);
              }}
              aria-label="Gửi quà mừng"
            >
              Gửi Quà Mừng
            </button>
            <img src={images.thank} className="w-50! h-auto mx-auto md:hidden block" />
          </div>
          <div className={`
            flex items-center justify-center
            absolute bottom-0 left-1/2 -translate-x-1/2
            transition-all duration-500 ease-out h-full
            ${showQRCode ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0 pointer-events-none"}
          `}>
            <div className="relative bg-white/40 p-8 rounded-lg md:max-w-lg min-w-[90vw] md:min-w-full w-full backdrop-blur-sm shadow-[0_10px_20px_rgba(201,164,106,0.5)] border-[#C9A46A] border-2">
              <button onClick={() => setShowQRCode(false)} aria-label="Đóng" className="absolute top-2 right-2 text-[#C9A46A] text-4xl font-bold leading-none">×</button>
              <h2 className="text-2xl text-[#C9A46A] font-bold mb-4 m-0! p-0!">QR Code</h2>
              <img src={images.qrCode} alt="QR Code" className="w-full h-auto mt-4" />
            </div>
          </div>

          {/* spin effect */}
          <div className=" lg:block hidden">
            <div className="absolute -right-26 bottom-1/3">
              <img
                src={images.hoaVan}
                className="w-max h-auto opacity-50 max-w-full"
                style={{ animation: "spinWedding 20s linear infinite" }}
              />
            </div>

            <div className="absolute -left-26 bottom-1/3">
              <img
                src={images.hoaVan}
                className="w-max h-auto max-w-sm opacity-50"
                style={{ animation: "spinWeddingReverse 20s linear infinite" }}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}