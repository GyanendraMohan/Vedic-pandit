import { Button } from "./ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-red-700 text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-full">
              <span className="text-5xl">🕉</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Experience Divine Blessings?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Book your pooja today and invite peace, prosperity, and spiritual
            fulfillment into your life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="gap-2 bg-white text-orange-600 hover:bg-gray-100 shadow-lg text-lg px-8 py-6 font-semibold"
            >
              <Phone className="h-5 w-5" />
              Call Now +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-white text-slate-600 hover:bg-white/10 text-lg px-8 py-6 font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 mx-auto mb-3 text-white/90" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-white/80">+91 98765 43210</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Mail className="h-8 w-8 mx-auto mb-3 text-white/90" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/80">support@divyaseva.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <MessageCircle className="h-8 w-8 mx-auto mb-3 text-white/90" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80">Chat with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
