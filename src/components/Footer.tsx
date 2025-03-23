
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-samsung-lightGray pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <h3 className="text-2xl font-display font-bold text-samsung-black">SAMSUNG</h3>
            </a>
            <p className="text-samsung-gray max-w-md mb-6">
              Samsung is a global technology leader dedicated to developing innovations that enrich people's lives and contribute to a better future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-samsung-gray hover:text-samsung-blue hover:bg-white transition-colors duration-200 shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-samsung-gray hover:text-samsung-blue hover:bg-white transition-colors duration-200 shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-samsung-gray hover:text-samsung-blue hover:bg-white transition-colors duration-200 shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-samsung-gray hover:text-samsung-blue hover:bg-white transition-colors duration-200 shadow-sm">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-samsung-black mb-5">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Smartphones</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Tablets</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Watches</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">TVs</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Home Appliances</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-samsung-black mb-5">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Manuals</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Service Centers</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Warranty</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-samsung-black mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Sustainability</a></li>
              <li><a href="#" className="text-samsung-gray hover:text-samsung-blue transition-colors duration-200">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-samsung-gray order-2 md:order-1 mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Samsung Electronics Co., Ltd. All Rights Reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-samsung-gray order-1 md:order-2">
              <a href="#" className="hover:text-samsung-blue transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-samsung-blue transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-samsung-blue transition-colors duration-200">Cookie Policy</a>
              <a href="#" className="hover:text-samsung-blue transition-colors duration-200">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
