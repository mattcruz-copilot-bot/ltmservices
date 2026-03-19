import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-[0.03]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-12 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get <span className="text-gradient-gold">Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Get in touch today for a free, no-obligation quote. Our team is ready to discuss
            your facilities management requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_40px_hsl(40_65%_50%/0.45)] hover:brightness-110 hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+447944885705"
              className="glass px-8 py-4 rounded-lg font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-300 hover:border-primary/50"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
