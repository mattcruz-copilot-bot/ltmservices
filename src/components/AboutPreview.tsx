import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const highlights = [
  "Higher Education & Healthcare/NHS specialists",
  "Full asset tracking & transparent reporting",
  "Experienced, qualified engineering team",
  "Nationwide coverage from London",
];

const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src={aboutBg} alt="LTM Services team" className="w-full h-[450px] lg:h-[550px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-6 flex gap-8">
              <div>
                <div className="text-2xl font-bold text-primary">PPM</div>
                <div className="text-xs text-muted-foreground">Planned Maintenance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Multi-Site</div>
                <div className="text-xs text-muted-foreground">Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              About Our Company
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              At the Forefront of{" "}
              <span className="text-gradient-gold">Facilities Management</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We pride ourselves on delivering top-tier solutions with unmatched precision and reliability.
              Our team of seasoned professionals is dedicated to providing quality and efficiency in every project.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our highly skilled team of LTM engineers manage a range of FM contracts, maintaining large sites
              serving the Higher Education, Healthcare/NHS and Commercial sectors.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
