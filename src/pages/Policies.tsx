import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-12">
                <span className="text-gradient-gold">Privacy</span> Policy
              </h1>
            </motion.div>

            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
              <div className="glass rounded-xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you fill in a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and details about your facilities management requirements.</p>
              </div>

              <div className="glass rounded-xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
                <p>We use the information we collect to respond to your enquiries, provide our facilities management services, send you relevant communications about our services, and improve our website and service offerings.</p>
              </div>

              <div className="glass rounded-xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Data Protection</h2>
                <p>We are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk.</p>
              </div>

              <div className="glass rounded-xl p-8 space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
                <p>If you have any questions about this privacy policy or our data practices, please contact us at info@itm-ukservices.co.uk..</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
