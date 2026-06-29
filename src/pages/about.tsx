import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Award, Target, History } from "lucide-react";

import ownerImg from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.47 AM.jpeg";
import shopInterior from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.46 AM.jpeg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | M.S. Vision Opticals</title>
        <meta name="description" content="Learn about Suhalin Siddiqui and the mission behind M.S. Vision Opticals in Noida. Trusted eye care since inception." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            A Vision for Better Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed"
          >
            M.S. Vision Opticals was founded on a simple premise: everyone deserves access to premium eye care, accurate testing, and stylish frames without compromising on quality or trust.
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img src={ownerImg} alt="Suhalin Siddiqui" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Meet the Founder</h2>
              <h3 className="text-xl text-secondary font-bold mb-8">Suhalin Siddiqui</h3>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  As a trusted optician in Noida, Suhalin Siddiqui has dedicated his career to improving the visual health of families in Sector 49, Baraula, and beyond.
                </p>
                <p>
                  "We don't just sell glasses; we provide a fundamental healthcare service. When a family walks into M.S. Vision Opticals, they are placing their trust in us. We honor that trust with clinical precision, transparent pricing, and the highest quality products available."
                </p>
                <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2">
                    <Award className="text-secondary" />
                    <span className="font-medium text-foreground">Certified Optician</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="text-secondary" />
                    <span className="font-medium text-foreground">5+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide unparalleled eye care services through advanced technology, paired with a curated selection of premium eyewear, ensuring every customer leaves with perfect vision and complete satisfaction.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white p-12 rounded-3xl shadow-lg"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle size={32} className="text-secondary" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To be the most trusted name in optical healthcare across Noida, recognized for our clinical excellence, ethical practices, and commitment to enhancing the community's quality of life through better vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Why Families Trust Us</h2>
            <p className="text-lg text-muted-foreground">We combine the warmth of a neighborhood optician with the precision of a modern eye care clinic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Technology", desc: "State-of-the-art auto refractometers and lensmeters for pinpoint accurate prescriptions." },
              { title: "Premium Collections", desc: "From affordable durability to luxury designer frames, we have options for every style and budget." },
              { title: "Honest Pricing", desc: "No hidden costs. We recommend exactly what you need, ensuring you get the best value." },
              { title: "Expert Guidance", desc: "Personalized frame styling and lens recommendations based on your lifestyle and prescription." },
              { title: "Pristine Showroom", desc: "A clean, modern, and welcoming environment designed for your comfort." },
              { title: "After-Sales Support", desc: "Free frame adjustments, cleaning, and minor repairs for all our customers." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all bg-card"
              >
                <CheckCircle className="text-secondary mb-4" size={28} />
                <h4 className="text-xl font-bold font-serif mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[60vh]">
            <img src={shopInterior} alt="M.S. Vision Showroom" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-12 py-8 rounded-2xl text-center max-w-lg">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Visit Our Showroom</h3>
                <p className="text-muted-foreground mb-6">Experience the M.S. Vision difference.</p>
                <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
