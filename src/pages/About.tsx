import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  { icon: Target, title: "Precision", description: "Every project is delivered with meticulous attention to detail and quality standards." },
  { icon: Eye, title: "Transparency", description: "Complete visibility into maintenance progress, costs, and compliance status." },
  { icon: Award, title: "Excellence", description: "Our engineering team brings decades of combined experience to every site." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="container relative mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
                About <span className="text-gradient-gold">LTM Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                At the forefront of the facilities and maintenance industry since day one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-6">Our <span className="text-gradient-gold">Story</span></h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At the forefront of the facilities and maintenance industry, we pride ourselves on delivering
                    top-tier solutions with unmatched precision and reliability. Our team of seasoned professionals
                    is dedicated to providing quality and efficiency in every project.
                  </p>
                  <p>
                    Providing you with tailored building maintenance services, we navigate the minefield of building
                    legislation and give you complete peace of mind that your site is compliant. Our rich industry
                    experience helps us deliver crucial planned preventative maintenance to ensure your facilities
                    constantly run smoothly.
                  </p>
                  <p>
                    All our maintenance, reactive and compliance works are controlled, tracked and transparent to
                    provide you with regular updates on our progress. Our engineers have access to a complete history
                    for every site and asset, together with engineer works and equipment updates.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Why <span className="text-gradient-gold">Choose Us</span></h2>
                <div className="space-y-4">
                  {[
                    "Full scale PPM and reactive maintenance for all industries",
                    "Qualified engineers with complete site and asset history",
                    "Transparent tracking and regular progress updates",
                    "Compliance management and building legislation expertise",
                    "Large-scale FM contracts across multiple sectors",
                    "24/7 support and rapid response times",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 border-t border-border/30">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our <span className="text-gradient-gold">Values</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass rounded-xl p-8 text-center hover-lift ${i === 0 ? 'highlight-top-left' : i === 1 ? 'highlight-bottom-right' : 'highlight-top-right'}`}
                >
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                    <v.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
