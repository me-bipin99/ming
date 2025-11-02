
import { Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Ming</h2>
            <p className="text-gray-600 mb-6">
              At Ming Food & Beverages, we bring you the authentic flavors of Asian cuisine with a modern twist. 
              Our chefs combine traditional recipes with contemporary techniques to create unforgettable dining experiences.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-gray-600">Everyday: 7:30 AM - 10:30 PM</p>
                  
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="font-semibold text-gray-900">Our Location:</p>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Lalitpur Branch</p>
                    <p className="text-gray-600">M8GG+M58, Lalitpur 44600</p>
                    
                    <p className="text-gray-600">+977 976-2272066</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.6545336306056!2d85.3256815781756!3d27.676840937404968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190065edaee9%3A0xdd458603756443a2!2sMing%20Food%20%26%20Beverage!5e0!3m2!1sen!2snp!4v1731531641730!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ming Restaurant Locations"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}