import { Badge } from "./ui/badge";
import { Clock, Shield, Users, Award, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Authentic Rituals",
    description: "Traditional poojas performed by certified Pandits following ancient Vedic scriptures.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Expert Pandits",
    description: "Experienced and knowledgeable Pandits with years of dedication to spiritual practices.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Timing",
    description: "Book poojas at your convenience with flexible scheduling and home visit options.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Family Involvement",
    description: "All family members can participate in sacred rituals for collective blessings.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Custom Solutions",
    description: "Tailored pooja services based on your specific needs and cultural preferences.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Divine Blessings",
    description: "Experience peace, prosperity, and spiritual fulfillment through sacred ceremonies.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-none">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
            Our Key Features
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Experience divine blessings through our trusted and authentic pooja services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-white to-amber-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4 text-white shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">{feature.title}</h3>
              <p className="text-amber-700 leading-relaxed">{feature.description}</p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

