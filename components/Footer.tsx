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

            {/* <div className="flex space-x-4">
              <a href="https://linkedin.com/company/visble" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/visble" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/visble" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* 2. Product */}
          {/* <div>
            <p className="font-bold bricolage text-lg mb-6 text-white">
              Product
            </p>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white">API Documentation</Link></li>
              <li><Link href="/integrations" className="text-gray-400 hover:text-white">Integrations</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-white">Security</Link></li>
            </ul>
          </div> */}

          {/* 3. Company */}
          <div>
            <p className="font-bold bricolage text-lg mb-6 text-white">
              Company
            </p>
            <ul className="space-y-4 text-sm">
              {/* <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li> */}
              {/* <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li> */}
              <li><Link href="/blogs" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/#case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              {/* <li><Link href="/press" className="text-gray-400 hover:text-white">Press Kit</Link></li> */}
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <p className="font-bold bricolage text-lg mb-6 text-white">
              Contact
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:isha@visble.ai" className="text-gray-400 hover:text-white">
                  isha@visble.ai
                </a>
              </li>
              {/* <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+15550123" className="text-gray-400 hover:text-white">
                  +1 (555) 0123
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Visble. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              {/* <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link> */}
              {/* <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
