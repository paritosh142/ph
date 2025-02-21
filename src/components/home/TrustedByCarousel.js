// components/home/TrustedByCarousel.js
"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const TrustedByCarousel = () => {
  const clients = [
    {
      name: "Parle Agro",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgpOFlCOwubK3PdhvxvgsgfVONJMd4V1fjQ&s",
    },
    {
      name: "Britannia",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Britannia_Industries_logo.svg/1200px-Britannia_Industries_logo.svg.png",
    },
    {
      name: "Hero",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hero_MotoCorp.svg/1200px-Hero_MotoCorp.svg.png",
    },
    {
      name: "Suzuki",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/suzuki-logo-png-transparent.png",
    },
    {
      name: "Haldiram",
      logo: "https://download.logo.wine/logo/Haldiram's/Haldiram's-Logo.wine.png",
    },
    {
      name: "Apollo",
      logo: "https://cdn.worldvectorlogo.com/logos/apollo-tyres-logo.svg",
    },
    {
      name: "Medanta",
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1504670742/rpjgrkfsfexubeqvzotp.jpg",
    },
    {
      name: "BlackRock",
      logo: "https://purepng.com/public/uploads/large/purepng.com-blackrock-logologobrand-logoiconslogos-251519938910ako99.png",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
      name: "HCL",
      logo: "https://banner2.cleanpng.com/20180606/tw/aa85e5kj2.webp",
    },
    {
      name: "Millennium",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Millennium_Hotels_And_Resorts_Logo.png",
    },
    {
      name: "Brillio",
      logo: "https://lever-client-logos.s3.us-west-2.amazonaws.com/ed9b1f28-604d-4e66-962f-55a70024eb24-1656488321929.png",
    },
    {
      name: "Star Health",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Star_Health_and_Allied_Insurance.svg/2560px-Star_Health_and_Allied_Insurance.svg.png",
    },
    {
      name: "PepsiCo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg",
    },
    {
      name: "Honda",
      logo: "https://clipart-library.com/images_k/honda-logo-transparent/honda-logo-transparent-6.jpg",
    },
    {
      name: "Renault",
      logo: "https://www.citypng.com/public/uploads/preview/hd-renault-logo-transparent-background-701751694707700rafepr2bno.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold text-blue-600 mb-2">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="py-8"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-24 relative"
              >
                <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    layout="fill"
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default TrustedByCarousel;
