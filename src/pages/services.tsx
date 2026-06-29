import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Eye, Glasses, Sun, Monitor, Wrench, Baby, Sparkles, Droplet, Zap, CheckCircle } from "lucide-react";

import autoRefractometer from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.39.02 AM.jpeg";
import contactLensDisplay from "@assets/shop_images/WhatsApp Image 2026-06-20 at 10.38.54 AM.jpeg";

const SERVICES = [
  {
    id: "eye-testing",
    title: "Computerized Eye Testing",
    desc: "State-of-the-art auto refractometer testing combined with meticulous manual subjective refraction. We ensure your prescription is 100% accurate before you choose your lenses.",
    icon: <Eye size={32} />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "prescription-glasses",
    title: "Prescription Glasses",
    desc: "Custom-crafted lenses tailored exactly to your visual needs. From single vision to complex high-index prescriptions, we deliver clarity in every pair.",
    icon: <Glasses size={32} />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    id: "progressive-lenses",
    title: "Progressive Lenses",
    desc: "Seamless vision at all distances. We specialize in precise fitting of premium progressive lenses from top global brands, eliminating the need for separate reading glasses.",
    icon: <Sparkles size={32} />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "contact-lenses",
    title: "Contact Lenses",
    desc: "Expert fitting for daily, monthly, and colored contact lenses. We provide comprehensive training on application, removal, and hygiene for first-time wearers.",
    icon: <Droplet size={32} />,
    color: "bg-teal-50 text-teal-600"
  },
  {
    id: "sunglasses",
    title: "Premium Sunglasses",
    desc: "Protect your eyes with style. 100% UV protection sunglasses, available in both prescription and non-prescription options across various designer brands.",
    icon: <Sun size={32} />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: "kids-eyewear",
    title: "Kids Eyewear",
    desc: "Durable, flexible, and comfortable frames designed specifically for active children. We make the eyewear selection process fun and stress-free for kids.",
    icon: <Baby size={32} />,
    color: "bg-pink-50 text-pink-600"
  },
  {
    id: "blue-light",
    title: "Blue Light Glasses",
    desc: "Reduce digital eye strain and improve sleep quality. Essential protection for professionals and students who spend hours in front of screens.",
    icon: <Monitor size={32} />,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    id: "frame-adjustments",
    title: "Frame Adjustments",
    desc: "Glasses slipping down your nose or pinching behind your ears? We offer professional, complimentary frame alignment to ensure the perfect fit.",
    icon: <Wrench size={32} />,
    color: "bg-slate-50 text-slate-600"
  },
  {
    id: "repairs",
    title: "Spectacle Repairs",
    desc: "From missing screws to bent hinges, our skilled technicians can rescue your favorite pair of glasses with prompt and careful repair services.",
    icon: <Zap size={32} />,
    color: "bg-red-50 text-red-600"
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | M.S. Vision Opticals Noida</title>
        <meta name="description" content="Explore our premium eye care services including computerized eye testing, progressive lenses, contact lenses, and expert frame adjustments." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary"
          >
            Comprehensive Eye Care
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Precision clinical testing paired with premium eyewear solutions. Every service we offer is executed with uncompromising attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Area: Clinical Excellence */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={autoRefractometer} alt="Advanced Eye Testing Equipment" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Clinical Precision</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                The foundation of great vision is an accurate prescription. We invest in top-tier computerized testing equipment to ensure we capture the exact refractive error of your eyes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-secondary shrink-0 mt-1" />
                  <span>State-of-the-art auto refractometry</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-secondary shrink-0 mt-1" />
                  <span>Comprehensive slit-lamp examinations</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-secondary shrink-0 mt-1" />
                  <span>Precise lensometry for verifying existing prescriptions</span>
                </li>
              </ul>
              
              <a href="/contact" className="inline-block mt-10 px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-colors shadow-lg">
                Book an Eye Test
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Area: Contact Lenses */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">Contact Lens Specialists</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for the convenience of daily disposables, the versatility of monthly lenses, or aesthetic colored lenses, we guide you to the perfect fit.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">1</div>
                  <span>Expert fitting assessment based on your corneal curvature</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">2</div>
                  <span>Extensive range of cosmetic color lenses (brown, green, blue, grey)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">3</div>
                  <span>First-time wearer training and hygiene education</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={contactLensDisplay} alt="Contact Lens Display" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
