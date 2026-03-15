import { motion } from "framer-motion";
import { Wrench, Shield, ClipboardCheck, Building2, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: ClipboardCheck,
    title: "Planned Preventative Maintenance",
    description: "Comprehensive PPM schedules to ensure your facilities constantly run smoothly and avoid costly breakdowns.",
  },
  {
    icon: Wrench,
    title: "Reactive Maintenance",
    description: "Rapid response reactive maintenance services to minimise downtime and keep your business running.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Navigate the minefield of building legislation with complete peace of mind that your site is compliant.",
  },
  {
    icon: Building2,
    title: "FM Contracts",
    description: "Full-scale facilities management contracts for large sites across Higher Education, Healthcare/NHS and Commercial sectors.",
  },
  {
    icon: Zap,
    title: "Electrical & Mechanical",
    description: "Expert electrical and mechanical services including testing, installation, and maintenance by qualified engineers.",
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "Transparent progress tracking with complete site and asset history accessible to our engineering teams.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient-gold">FM Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored building maintenance services backed by rich industry experience and a highly skilled engineering team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-xl p-8 hover-lift group cursor-default ${index % 3 === 0 ? 'highlight-top-left' : index % 3 === 1 ? 'highlight-bottom-right' : 'highlight-top-right'}`}
            >
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-6 group-hover:shadow-[0_4px_20px_hsl(40_65%_50%/0.3)] transition-shadow">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold tracking-wide inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(40_65%_50%/0.3)]"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
