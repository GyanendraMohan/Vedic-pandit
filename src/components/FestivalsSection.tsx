import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Sparkles } from "lucide-react";

const festivals = [
  {
    id: 1,
    name: "Diwali Pooja",
    date: "Oct 31 - Nov 1",
    description: "Celebrate the festival of lights with special Lakshmi-Ganesh Pooja for prosperity and fortune.",
    image: "https://images.unsplash.com/photo-1602834077785-27df485f36cf?w=400&h=300&fit=crop",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Navratri Celebrations",
    date: "Oct 3-12",
    description: "Worship Goddess Durga with nine days of devotion, chanting, and sacred rituals.",
    image: "https://images.unsplash.com/photo-1607365332817-77474f8d1c39?w=400&h=300&fit=crop",
    status: "Active",
  },
  {
    id: 3,
    name: "Dussehra Pooja",
    date: "Oct 12",
    description: "Victory of good over evil. Ravan Dahan ceremony with powerful Yagya.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    status: "Upcoming",
  },
  {
    id: 4,
    name: "Karwa Chauth",
    date: "Nov 1",
    description: "Sacred fast pooja for marital bliss and long life of husbands.",
    image: "https://images.unsplash.com/photo-1606297255792-aaa481acdc18?w=400&h=300&fit=crop",
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Dhanteras Pooja",
    date: "Oct 29",
    description: "Worship Goddess Lakshmi and Kuber for wealth and prosperity.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    status: "Upcoming",
  },
  {
    id: 6,
    name: "Guru Purnima",
    date: "Jul 21",
    description: "Honor your teachers and spiritual guides with special Guru Pooja.",
    image: "https://images.unsplash.com/photo-1606297255792-aaa481acdc18?w=400&h=300&fit=crop",
    status: "Past",
  },
];

export function FestivalsSection() {
  return (
    <section id="festivals" className="py-20 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-none">
            Festivals & Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
            Upcoming Festivals
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Celebrate festivals with traditional poojas and sacred rituals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${
                festival.status === "Active"
                  ? "border-orange-400 bg-gradient-to-br from-orange-50 to-amber-50"
                  : "border-amber-200 bg-white hover:border-orange-300"
              }`}
            >
              {/* Status Badge */}
              {festival.status === "Active" && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-500 text-white animate-pulse border-none">
                    Live Now
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Date */}
                <div className="flex items-center justify-center gap-2 text-sm text-amber-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="font-semibold">{festival.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-center text-amber-900 group-hover:text-orange-600 transition-colors">
                  {festival.name}
                </h3>

                {/* Description */}
                <p className="text-amber-700 text-center mb-6 leading-relaxed">
                  {festival.description}
                </p>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Book Pooja
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-amber-600 text-amber-700 hover:bg-amber-50">
            View All Festivals
          </Button>
        </div>
      </div>
    </section>
  );
}

