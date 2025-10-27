import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-red-600">
                <span className="text-white text-2xl">🕉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DivyaSeva</h3>
                <p className="text-xs text-amber-200">Divine Rituals</p>
              </div>
            </div>
            <p className="text-sm text-amber-200">
              Connecting devotees with expert Pandits for traditional Hindu rituals and ceremonies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#poojas" className="hover:text-amber-300 transition-colors">Poojas</a></li>
              <li><a href="#pandits" className="hover:text-amber-300 transition-colors">Pandits</a></li>
              <li><a href="#bookings" className="hover:text-amber-300 transition-colors">My Bookings</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-300 transition-colors">House Pooja</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Festival Poojas</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Muhurat Services</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Graha Shanti</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Online Pooja</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>support@divyaseva.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-amber-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-amber-200">
            © 2024 DivyaSeva. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

