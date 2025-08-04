import { FC } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Amour Editorial</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Professional editing services to elevate your content and bring your ideas to life.
            </p>
           
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Services
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Follow us for updates and writing tips.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="https://github.com/lolpanda2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                aria-label="GitHub - Project Admin"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lathika-devanand-bb5813224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                aria-label="LinkedIn - Lathika Devanand"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 bg-gray-800 rounded-md text-gray-400 hover:text-pink-400 hover:bg-gray-700 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright and Credits */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} Amour Editorial. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms
              </Link>
              <p className="text-gray-500">
                Built with ❤️ by{" "}
                <a 
                  href="https://github.com/lolpanda2004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
