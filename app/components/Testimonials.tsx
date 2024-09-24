// components/Testimonials.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-12">
        What Educators and Parents Say
      </h2>
      <div className="w-full md:w-2/3 mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="testimonial-item text-center px-4">
              <p className="italic mb-4">
                &quot;PictureBooks.ai has transformed my classroom. My students
                are more eager to read than ever!&quot;
              </p>
              <h4 className="font-semibold">Ms. Thompson</h4>
              <span className="text-gray-600">3rd Grade Teacher</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center px-4">
              <p className="italic mb-4">
                &quot;As a parent, seeing my child so engaged with reading is
                priceless.&quot;
              </p>
              <h4 className="font-semibold">Daniel R.</h4>
              <span className="text-gray-600">Parent</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center px-4">
              <p className="italic mb-4">
                &quot;The personalized stories keep my students motivated and
                excited to learn.&quot;
              </p>
              <h4 className="font-semibold">Mr. Lee</h4>
              <span className="text-gray-600">Literacy Specialist</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
