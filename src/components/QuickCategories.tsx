import { Card } from "./ui/card";
import { Flame, Book, Home, Calendar, Church, Sun } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Daily Pooja",
    icon: Sun,
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    count: "12+ Rituals"
  },
  {
    id: 2,
    name: "Katha",
    icon: Book,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    count: "8+ Stories"
  },
  {
    id: 3,
    name: "Havan",
    icon: Flame,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    count: "10+ Types"
  },
  {
    id: 4,
    name: "Festival",
    icon: Calendar,
    color: "from-orange-600 to-red-700",
    bgColor: "bg-orange-50",
    count: "15+ Events"
  },
  {
    id: 5,
    name: "Temple Visit",
    icon: Church,
    color: "from-red-600 to-orange-700",
    bgColor: "bg-red-50",
    count: "20+ Temples"
  },
  {
    id: 6,
    name: "Home Rituals",
    icon: Home,
    color: "from-amber-600 to-orange-700",
    bgColor: "bg-amber-50",
    count: "18+ Services"
  }
];

export function QuickCategories() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-3">
            Quick Categories
          </h2>
          <p className="text-amber-800">
            Choose from our diverse collection of sacred rituals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 flex flex-col items-center text-center space-y-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-amber-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-amber-700">{category.count}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

