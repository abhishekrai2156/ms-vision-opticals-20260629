import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif font-bold text-2xl tracking-tight">M.S. Vision</span>
              <span className="block text-xs text-white/50 tracking-widest uppercase font-medium mt-0.5">Opticals</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Noida's trusted destination for premium eyewear and complete eye care. Computerised testing, designer frames, contact lenses &amp; sunglasses.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white/90 mb-5 text-sm tracking-wide uppercase">Quick links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", path: "/services" },
                { label: "Collection", path: "/products" },
                { label: "About us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white/90 mb-5 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {[
                "Computerized Eye Testing",
                "Prescription Glasses",
                "Progressive Lenses",
                "Contact Lenses",
                "Sunglasses",
                "Kids Eyewear",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-semibold text-white/90 mb-5 text-sm tracking-wide uppercase">Visit us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="shrink-0 mt-0.5 text-white/40" />
                <span>Main Market, near Verma Jewellers, Rajput Colony, Baraula, Sector 49, Noida, UP 201304</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock size={15} className="shrink-0 text-white/40" />
                <span>Mon – Sun · 10 AM – 9 PM</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={15} className="shrink-0 text-white/40" />
                <a href="tel:+919897905759" className="text-white/60 hover:text-white transition-colors">
                  +91 98979 05759
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={15} className="shrink-0 text-white/40" />
                <a
                  href="mailto:msvisionopticals10102023@gmail.com"
                  className="text-white/60 hover:text-white transition-colors break-all"
                >
                  msvisionopticals10102023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} M.S. Vision Opticals. All rights reserved.</p>
          <p>Crafted with care in Noida, India.</p>
          <p>Website Developed by Abhishek Rai | Contact: 9868461939</p>
        </div>
      </div>
    </footer>
  );
}
