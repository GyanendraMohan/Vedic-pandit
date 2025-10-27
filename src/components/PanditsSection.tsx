import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Award, Users } from "lucide-react";

const pandits = [
  {
    id: 1,
    name: "Pandit Ramesh Sharma",
    expertise: "Vedic Rituals & Yagyas",
    experience: "25+ years",
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Maha Pooja", "Yagyas", "Graha Shanti"],
    location: "Delhi",
    languages: ["Hindi", "Sanskrit"],
  },
  {
    id: 2,
    name: "Pandit Lakshmi Devi",
    expertise: "Lakshmi & Wealth Poojas",
    experience: "20+ years",
    rating: 4.8,
    reviews: 286,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face",
    specialties: ["Lakshmi Pooja", "Dhanwantari", "Kuber Pooja"],
    location: "Mumbai",
    languages: ["Hindi", "Marathi", "Sanskrit"],
  },
  {
    id: 3,
    name: "Pandit Suresh Ji",
    expertise: "Griha Pravesh & Vastu",
    experience: "18+ years",
    rating: 4.9,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    specialties: ["Griha Pravesh", "Vastu Pooja", "House Blessing"],
    location: "Bangalore",
    languages: ["Hindi", "Kannada"],
  },
  {
    id: 4,
    name: "Pandit Priya Sharma",
    expertise: "Festival Poojas",
    experience: "15+ years",
    rating: 4.7,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    specialties: ["Festival Poojas", "Navratri", "Diwali"],
    location: "Pune",
    languages: ["Hindi", "Marathi"],
  },
];

export function PanditsSection() {
  return (
    <section id="pandits" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-none">
            Expert Pandits
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
            Meet Our Pandits
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Experienced and knowledgeable Pandits ready to conduct your sacred rituals
          </p>
        </div>

        {/* Pandits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pandits.map((pandit) => (
            <div
              key={pandit.id}
              className="group bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="relative p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 ring-4 ring-amber-200 group-hover:ring-orange-400 transition-all">
                  <img 
                    src={pandit.image} 
                    alt={pandit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white border-none animate-pulse">
                    Available
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-amber-900">{pandit.name}</h3>
                <p className="text-sm text-amber-600 mb-3">{pandit.expertise}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(pandit.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-amber-700">{pandit.rating}</span>
                  <span className="text-xs text-amber-600">({pandit.reviews})</span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 text-sm text-amber-700 mb-4">
                  <Award className="h-4 w-4" />
                  <span>{pandit.experience}</span>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pandit.specialties.slice(0, 2).map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-amber-600 mb-4">
                  <Users className="h-4 w-4" />
                  <span>{pandit.location}</span>
                </div>

                {/* CTA */}
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 text-xs">
                    View Profile
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 text-xs">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

