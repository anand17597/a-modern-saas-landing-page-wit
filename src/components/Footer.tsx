import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  id: string;
  scrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ id, scrollTo }) => {
  return (
    <footer id={id} className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SaasFlow</h3>
          <p className="text-sm">Revolutionizing your business with powerful SaaS solutions.</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => scrollTo('features')} className="hover:text-white transition-colors duration-200">Features</button></li>
            <li><button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors duration-200">Pricing</button></li>
            <li><button onClick={() => scrollTo('testimonials')} className="hover:text-white transition-colors duration-200">Testimonials</button></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Partners</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors duration-200">FAQ</button></li>
            <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors duration-200">Help Center</button></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SaasFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;