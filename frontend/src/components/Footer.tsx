import { FC } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-muted border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-3 text-foreground">Amour Editorial</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-xs">
              Professional editing services to elevate your content and bring your ideas to life.
            </p>
           
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                About Us
              </Link>
              <Link href="/services" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Services
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Connect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base font-semibold mb-3 text-foreground">Connect With Us</h4>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed max-w-xs">
              Follow us for updates and writing tips.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 flex-wrap">
              <a 
                href="https://github.com/lolpanda2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                aria-label="GitHub - Project Admin"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lathika-devanand-bb5813224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
                aria-label="LinkedIn - Lathika Devanand"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            {/* Copyright and Credits */}
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()} Amour Editorial. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:gap-4 text-xs order-1 sm:order-2">
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms
                </Link>
              </div>
              <p className="text-muted-foreground text-center sm:text-left">
                Built with 💛 by{" "}
                <a 
                  href="https://github.com/lolpanda2004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300"
                >
                 Amour Editorial x GSSOC 2025
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
