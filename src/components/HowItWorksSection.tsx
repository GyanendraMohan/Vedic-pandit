import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Search, Calendar, Phone, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Pooja",
    description: "Browse through our extensive catalog of traditional poojas and select the one that aligns with your needs.",
    icon: <Search className="h-12 w-12" />,
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "02",
    title: "Book Your Slot",
    description: "Select your preferred date and time. We offer flexible scheduling to suit your convenience.",
    icon: <Calendar className="h-12 w-12" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "03",
    title: "Expert Pandit Visits",
    description: "Our certified Pandit arrives at your home with all necessary pooja materials and divine energy.",
    icon: <Phone className="h-12 w-12" />,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Experience Blessings",
    description: "Participate in the sacred ceremony and receive divine blessings for peace, prosperity, and fulfillment.",
    icon: <CheckCircle className="h-12 w-12" />,
    color: "from-red-500 to-amber-500",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-none">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Book your pooja in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent -z-10 translate-x-8"></div>
              )}

              <div className="group relative bg-white rounded-2xl p-8 border-2 border-amber-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`mt-4 inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white mb-6`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-amber-900 group-hover:text-orange-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}

