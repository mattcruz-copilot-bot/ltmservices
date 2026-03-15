import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Wrench, Shield, ClipboardCheck, Building2, Zap, Users, Thermometer, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: ClipboardCheck,
    title: "Planned Preventative Maintenance",
    description: "Comprehensive PPM schedules designed to prevent equipment failures, extend asset life, and ensure your facilities run at peak efficiency. We tailor maintenance plans to your specific requirements.",
    features: ["Customised PPM schedules", "Asset lifecycle management", "Regulatory compliance checks", "Detailed reporting"],
  },
  {
    icon: Wrench,
    title: "Reactive Maintenance",
    description: "Rapid response to unexpected breakdowns and urgent repairs. Our engineers are equipped and ready to minimise downtime and get your operations back on track.",
    features: ["24/7 emergency callout", "Fast response times", "Multi-trade capabilities", "Transparent cost tracking"],
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Navigate complex building legislation with confidence. We ensure your site meets all statutory requirements, keeping you compliant and giving you complete peace of mind.",
    features: ["Fire safety compliance", "Electrical testing & certification", "Water hygiene (L8)", "Health & safety audits"],
  },
  {
    icon: Building2,
    title: "FM Contract Management",
    description: "Full-scale facilities management for large, complex sites. From Higher Education campuses to NHS trusts, we have the resources and experience to manage any challenge.",
    features: ["Dedicated account managers", "SLA performance tracking", "Cost optimisation", "Multi-site management"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Complete electrical services from installation to testing and maintenance, delivered by qualified electricians to the highest safety standards.",
    features: ["EICR testing", "Emergency lighting", "PAT testing", "Installation & upgrades"],
  },
  {
    icon: Thermometer,
    title: "HVAC & Mechanical",
    description: "Heating, ventilation and air conditioning services to maintain optimal building environments. We service, repair and install all major HVAC systems.",
    features: ["AHU maintenance", "Chiller servicing", "BMS integration", "Energy optimisation"],
  },
  {
    icon: Droplets,
    title: "Plumbing & Water Systems",
    description: "From routine plumbing repairs to Legionella risk assessments, our engineers ensure your water systems are safe, compliant, and running efficiently.",
    features: ["Legionella risk assessments", "Water treatment", "Drainage & repairs", "TMV servicing"],
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Every client gets a dedicated point of contact. All works are tracked, transparent, and reported regularly so you always know the status of your facilities.",
    features: ["Dedicated account manager", "Real-time job tracking", "Monthly performance reports", "Complete asset history"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-44 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={servicesBg} alt="" className="w-full h-full object-cover object-[center_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="container relative mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
                Comprehensive <span className="text-gradient-gold">FM Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Full scale PPM and reactive maintenance for all industries and sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-24 section-glow">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`glass rounded-xl p-8 hover-lift group ${index % 2 === 0 ? 'highlight-top-left' : 'highlight-bottom-right'}`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0 group-hover:shadow-[0_4px_24px_hsl(40_65%_50%/0.35)] transition-shadow">
                      <service.icon size={22} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold font-display">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6 text-lg">Need a tailored maintenance solution?</p>
              <Link
                to="/contact"
                className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold tracking-wide inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_8px_40px_hsl(40_65%_50%/0.45)] hover:brightness-110 hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
