
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-samsung-lightGray/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -top-64 -left-64 w-[500px] h-[500px] rounded-full bg-samsung-blue/5 -z-10" />
        <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full bg-samsung-lightBlue/5 -z-10" />
      </div>
  
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <span className="inline-block py-1 px-3 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-4">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-samsung-black mb-6">
                Get Updates on Latest Products
              </h2>
              <p className="text-samsung-gray text-lg mb-8 max-w-xl">
                Join our newsletter to receive product announcements, exclusive offers, and technology insights directly to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                <div 
                  className={cn(
                    "relative transition-all duration-300 rounded-full",
                    isFocused ? "shadow-lg ring-2 ring-samsung-blue/30" : "shadow"
                  )}
                >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-samsung-gray">
                    <Mail size={20} />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full py-4 pl-12 pr-36 rounded-full bg-white border-0 outline-none text-samsung-darkGray placeholder:text-samsung-gray/70"
                    disabled={isSubmitting || isSuccess}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={cn(
                      "absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2",
                      isSuccess 
                        ? "bg-green-500 text-white"
                        : "bg-samsung-blue text-white hover:bg-samsung-blue/90"
                    )}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSuccess ? (
                      "Subscribed!"
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-samsung-gray/70">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-display font-bold text-samsung-black mb-6">Get In Touch</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium text-samsung-darkGray mb-1">Our Headquarters</h4>
                    <p className="text-samsung-gray">Samsung Electronics Building, 129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-samsung-darkGray mb-1">Email Us</h4>
                    <a href="mailto:info@samsung.com" className="text-samsung-blue hover:underline">info@samsung.com</a>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-samsung-darkGray mb-1">Call Us</h4>
                    <a href="tel:+18005267663" className="text-samsung-blue hover:underline">+1 800-SAMSUNG</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
