import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              London's Trusted FM Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8"
          >
            Expert Facilities{" "}
            <span className="text-gradient-gold">Management</span>{" "}
            & Maintenance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            We make sure that your shop, office or other commercial space runs as efficiently
            and effectively as your business demands. Full scale PPM and reactive maintenance,
            for all industries and sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(40_65%_50%/0.3)] hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="glass px-8 py-4 rounded-lg font-semibold tracking-wide text-foreground inline-flex items-center justify-center gap-2 transition-all duration-300 hover:border-primary/50"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
