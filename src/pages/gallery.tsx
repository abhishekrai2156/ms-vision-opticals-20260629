import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import all images
import shopEntrance from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.41 AM.jpeg";
import shopExterior from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.52 AM.jpeg";
import shopInterior from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.46 AM.jpeg";
import slitLamp from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.38.56 AM.jpeg";
import trialLens from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.38.58 AM.jpeg";
import autoRefractometer from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.02 AM.jpeg";
import testingMachine from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.13 AM.jpeg";
import lensmeter from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.18 AM.jpeg";
import refractometerFront from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.42 AM.jpeg";
import testingChair from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.50 AM.jpeg";
import fullExam from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.51 AM.jpeg";

const GALLERY_IMAGES = [
  { id: 1, src: shopExterior, alt: "Shop Exterior Signage", span: "md:col-span-2 lg:col-span-2 md:row-span-2" },
  { id: 2, src: shopInterior, alt: "Modern Shop Interior", span: "md:col-span-1 lg:col-span-1" },
  { id: 3, src: autoRefractometer, alt: "Auto Refractometer", span: "md:col-span-1 lg:col-span-1" },
  { id: 4, src: shopEntrance, alt: "Shop Entrance", span: "md:col-span-1 lg:col-span-1 md:row-span-2" },
  { id: 5, src: slitLamp, alt: "Slit Lamp Examination", span: "md:col-span-1 lg:col-span-2" },
  { id: 6, src: testingChair, alt: "Patient Testing Chair", span: "md:col-span-1 lg:col-span-1" },
  { id: 7, src: trialLens, alt: "Trial Lens Set", span: "md:col-span-1 lg:col-span-1" },
  { id: 8, src: fullExam, alt: "Full Examination Station", span: "md:col-span-2 lg:col-span-2 md:row-span-2" },
  { id: 9, src: lensmeter, alt: "Lensmeter", span: "md:col-span-1 lg:col-span-1" },
  { id: 10, src: testingMachine, alt: "Digital Eye Testing", span: "md:col-span-1 lg:col-span-1" },
  { id: 11, src: refractometerFront, alt: "Refractometer View", span: "md:col-span-1 lg:col-span-1" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Showroom Gallery | M.S. Vision Opticals</title>
        <meta name="description" content="Take a virtual tour of the M.S. Vision Opticals showroom in Noida. View our state-of-the-art testing equipment and modern facilities." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground"
          >
            Inside Our Showroom
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A clean, well-lit space equipped with advanced clinical technology to ensure you receive the highest standard of optical care.
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.1 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 ${img.span}`}
                onClick={() => setSelectedImg(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-sm">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
