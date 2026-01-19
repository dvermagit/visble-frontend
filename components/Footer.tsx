import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Company Info & Socials */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              {/* SEO: Use next/image for logos */}
              <div className="relative w-8 h-8">
                <Image 
                  src="/favicon.png" 
                  alt="Visble AI Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold bricolage">Visble</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              AI-powered brand monitoring platform helping businesses track, analyze, and protect their brand reputation across all digital channels.
            </p>
            
            {/* Social Links: External, so use <a> with rel properties */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/visble" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/visble" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/visble" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View our GitHub"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Product Links - Use Next/Link for internal nav */}
          <div>
            <h3 className="font-bold bricolage text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              {/* Note: If these pages don't exist yet, keep them but they will 404 until created */}
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div>
            <h3 className="font-bold bricolage text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/#case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press Kit</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="font-bold bricolage text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:hello@visble.ai" className="text-gray-400 hover:text-white transition-colors">
                  hello@visble.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+15550123" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 0123
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Visble. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}