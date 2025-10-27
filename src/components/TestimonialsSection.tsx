import { Badge } from "./ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Amazing experience! Pandit ji conducted the Lakshmi Pooja beautifully. Everything was so well organized and spiritual. Our home feels blessed now.",
    pooja: "Lakshmi Pooja",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Expert service for Griha Pravesh. The Pandit was knowledgeable and made us feel comfortable throughout the ceremony. Highly recommend!",
    pooja: "Griha Pravesh",
  },
  {
    id: 3,
    name: "Meera Desai",
    location: "Bangalore",
    rating: 5,
    text: "Performed Ganesh Pooja for my new business. Very professional service and the pooja was conducted with great devotion. Thank you!",
    pooja: "Ganesh Pooja",
  },
  {
    id: 4,
    name: "Anil Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Excellent experience with Mahamrityunjaya Jaap. The Pandit ji explained everything in detail and made the entire family feel blessed.",
    pooja: "Mahamrityunjaya Jaap",
  },
  {
    id: 5,
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Best service for Navagraha Pooja. The arrangements were perfect and the Pandit was very experienced. We felt very positive energy.",
    pooja: "Navagraha Pooja",
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    text: "Highly satisfied with the Satyanarayan Katha. The Pandit ji guided us through the entire ceremony and created a divine atmosphere.",
    pooja: "Satyanarayan Katha",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white border-none">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Read testimonials from satisfied families who have experienced divine blessings through our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 bg-gradient-to-br from-white to-amber-50/50 rounded-2xl border border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-amber-200">
                <Quote className="h-10 w-10" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-amber-800 mb-4 leading-relaxed">{testimonial.text}</p>

              {/* Pooja Badge */}
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
                {testimonial.pooja}
              </Badge>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-amber-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-amber-900">{testimonial.name}</div>
                  <div className="text-sm text-amber-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

