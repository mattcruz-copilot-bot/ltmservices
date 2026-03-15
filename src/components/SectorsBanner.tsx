import { motion } from "framer-motion";
import { GraduationCap, Hospital, Building, Store } from "lucide-react";

const sectors = [
  { icon: GraduationCap, label: "Higher Education" },
  { icon: Hospital, label: "Healthcare / NHS" },
  { icon: Building, label: "Commercial" },
  { icon: Store, label: "Retail" },
];

const SectorsBanner = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-[0.2em] mb-10"
        >
          Sectors We Serve
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <sector.icon size={24} className="text-primary" />
              <span className="text-sm font-medium">{sector.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsBanner;
