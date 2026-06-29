import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import framesRayban from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.38 AM.jpeg";
import framesVersace from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.39 AM.jpeg";
import framesRound from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.15.57 AM.jpeg";
import framesAviator from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.15.58 AM.jpeg";
import framesColorful from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.40 AM.jpeg";
import framesCateye from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.40 AM (1).jpeg";
import framesPremiumCateye from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.40 AM (2).jpeg";
import framesKids from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.41 AM.jpeg";
import framesHalfRim from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.41 AM (1).jpeg";
import framesMetal from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.41 AM (2).jpeg";
import framesKidsStacked from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.42 AM.jpeg";
import framesRoundStacked from "@assets/shop_images/WhatsApp Image 2026-06-20 at 11.16.42 AM (1).jpeg";

const CATEGORIES = [
  "All",
  "Premium Frames",
  "Designer Collections",
  "Classic Styles",
  "Kids Eyewear",
];

const PRODUCTS = [
  { id: 1, category: "Designer Collections", title: "Eyones Big Boss Aviators", brand: "Eyones", img: framesAviator, tag: "Best Seller" },
  { id: 2, category: "Classic Styles", title: "Park Line Round Classics", brand: "Park Line", img: framesRound, tag: "Trending" },
  { id: 3, category: "Premium Frames", title: "Flicker Premium Cat-Eye", brand: "Flicker", img: framesPremiumCateye, tag: "Premium" },
  { id: 4, category: "Kids Eyewear", title: "Doctorate Flexible Kids Collection", brand: "Doctorate", img: framesKids, tag: "Durable" },
  { id: 5, category: "Designer Collections", title: "Versace & Big Boss Display", brand: "Various", img: framesVersace, tag: null },
  { id: 6, category: "Designer Collections", title: "Ray-Ban & Park Line Collection", brand: "Various", img: framesRayban, tag: null },
  { id: 7, category: "Classic Styles", title: "Flicker Cat-Eye Series", brand: "Flicker", img: framesCateye, tag: null },
  { id: 8, category: "Premium Frames", title: "Hadnt Eyewear Metal Frames", brand: "Hadnt", img: framesMetal, tag: "Lightweight" },
  { id: 9, category: "Classic Styles", title: "Classic Half-Rim Stack", brand: "Various", img: framesHalfRim, tag: null },
  { id: 10, category: "Premium Frames", title: "Colorful Temple Designs", brand: "Various", img: framesColorful, tag: "Stylish" },
  { id: 11, category: "Kids Eyewear", title: "Doctorate Kids Stack", brand: "Doctorate", img: framesKidsStacked, tag: null },
  { id: 12, category: "Classic Styles", title: "Round Frames Stack", brand: "Doctorate", img: framesRoundStacked, tag: null },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Eyewear Collections | M.S. Vision Opticals</title>
        <meta name="description" content="Browse our extensive collection of premium frames, designer eyewear, sunglasses, and kids glasses at M.S. Vision Opticals, Noida." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Curated Eyewear Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Frames that reflect your personality. Explore our curated selection of top international brands, durable everyday wear, and stylish designer pieces.
          </motion.p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-muted min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-muted-foreground hover:bg-white/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium text-secondary mb-2 tracking-wider uppercase">
                      {product.brand}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4 line-clamp-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star size={14} className="fill-secondary text-secondary" />
                        <span>Premium</span>
                      </div>
                      <a href={`https://wa.me/919310575277?text=Hi, I'm interested in the ${product.title} frames.`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary p-2 rounded-full hover:bg-primary/5 transition-colors">
                        <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                We have hundreds of frames in our physical store that aren't listed online. Visit us to explore the complete collection and get a personalized styling session.
              </p>
              <a href="/contact" className="inline-block px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-colors shadow-lg">
                Visit Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
