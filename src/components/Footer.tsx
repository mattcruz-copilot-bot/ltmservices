import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ltm-logo-final.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-navy-deep">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="LTM Services" className="h-[5.5rem] md:h-[6.5rem] w-auto object-contain rounded-lg" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Expert facilities management & maintenance services across London and the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h4>
            <nav className="flex flex-col gap-3">
              {["Planned Preventative Maintenance", "Reactive Maintenance", "Compliance Management", "FM Contracts"].map((s) => (
                <span key={s} className="text-sm text-muted-foreground">{s}</span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+442012345678" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" />
                020 1234 5678
              </a>
              <a href="mailto:info@ltmservices.co.uk" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" />
                info@ltmservices.co.uk
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                London, United Kingdom
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LTM Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/policies" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/policies" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
