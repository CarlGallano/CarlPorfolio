// Coverflow gallery (port of Skiper 47 Carousel_001 — Swiper, no Tailwind).
// Centered coverflow strip: middle slide full color, neighbours pushed back.
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CoverFlow.css";

export default function CoverFlow({
  shots = [],
  spaceBetween = 40,
  autoplayDelay = 2600,
}) {
  return (
    <div className="coverflow">
      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplayDelay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={shots.length > 3}
        slidesPerView={2.43}
        breakpoints={{ 0: { slidesPerView: 1.6 }, 810: { slidesPerView: 2.43 } }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="coverflow-swiper"
      >
        {shots.map((s, i) => (
          <SwiperSlide key={i} className="coverflow-slide">
            <img
              className="coverflow-img"
              src={s.src}
              alt={s.alt}
              loading="lazy"
              draggable={false}
            />
            {(s.title || s.description) && (
              <span className="coverflow-cap">
                {s.title && <b>{s.title}</b>}
                {s.description && <p>{s.description}</p>}
              </span>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
