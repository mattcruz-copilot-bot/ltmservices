import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ltm";
const EMAILJS_TEMPLATE_ID = "template_ltm";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent",
        description: "Thank you for your enquiry. We'll get back to you shortly.",
      });
      formRef.current?.reset();
    } catch {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try calling us or emailing directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-56 pb-20">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Get in <span className="text-gradient-gold">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Ready to discuss your facilities management needs? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 lg:p-10"
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">Email *</label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="07944 885705"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground/80 mb-2 block">Company</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">Service Required</label>
                    <select name="service" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                      <option value="">Select a service</option>
                      <option>Planned Preventative Maintenance</option>
                      <option>Reactive Maintenance</option>
                      <option>Compliance Management</option>
                      <option>FM Contract Management</option>
                      <option>Electrical Services</option>
                      <option>Fan Coil & VAV Servicing</option>
                      <option>Grill & Diffuser Cleaning</option>
                      <option>Commercial Cleaning</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold tracking-wide inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(40_65%_50%/0.3)] disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {[
                  { icon: Phone, label: "Phone", value: "07944 885705", href: "tel:+447944885705" },
                  { icon: Mail, label: "Email", value: "info@itm-ukservices.co.uk", href: "mailto:info@itm-ukservices.co.uk" },
                  { icon: MapPin, label: "Location", value: "London, United Kingdom" },
                  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8:00 - 18:00" },
                ].map((item) => (
                  <div key={item.label} className={`glass rounded-xl p-6 hover-lift ${['highlight-top-left', 'highlight-top-right', 'highlight-bottom-right', 'highlight-top-left'][['Phone','Email','Location','Working Hours'].indexOf(item.label)]}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Emergency Callout</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent reactive maintenance outside of working hours, contact our 24/7 emergency line.
                  </p>
                  <a href="tel:+447944885705" className="gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
                    <Phone size={16} />
                    Emergency Line
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
