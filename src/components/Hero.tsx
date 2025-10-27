import { Button } from "./ui/button";
import { Calendar, Search, Sparkles, Star } from "lucide-react";
import { Input } from "./ui/input";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1663660408539-c9cbfcedd241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE0OTcwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          {/* Gradient Overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-800/80 to-red-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/95 via-orange-50/85 to-transparent"></div>
        </div>
        
        {/* Decorative lotus pattern overlay */}
        <div className="absolute inset-0 lotus-pattern opacity-30"></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 z-10"></div>
      
      <div className="container relative z-20 mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border-2 border-orange-300 shadow-lg">
            <span className="text-3xl">🙏</span>
            <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
              Namaste, Welcome to DivyaSeva
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg leading-tight">
              Sacred Hindu Rituals<br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-amber-100">at Your Doorstep</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Book authentic Vedic poojas, kathas, and ceremonies performed by experienced pandits. 
              Bring divine blessings and prosperity to your home.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative flex items-center gap-2 bg-white p-2 rounded-2xl shadow-2xl border-2 border-orange-200">
                <Search className="h-5 w-5 text-orange-500 ml-3" />
                <Input
                  placeholder="Search for Pooja, Katha, or Pandit…"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-amber-900 placeholder:text-amber-600"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-6 shadow-lg">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-xl px-8 text-lg">
              <Calendar className="h-5 w-5" />
              <span>Book a Pooja</span>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-white bg-white/90 backdrop-blur-sm text-orange-600 hover:bg-white px-8 text-lg shadow-lg">
              <Sparkles className="h-5 w-5" />
              <span>Explore Rituals</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">500+</span>
              </div>
              <div className="text-sm text-amber-800">Poojas Completed</div>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">50+</span>
              </div>
              <div className="text-sm text-amber-800">Expert Pandits</div>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">25+</span>
              </div>
              <div className="text-sm text-amber-800">Cities</div>
            </div>
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">4.8</span>
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              </div>
              <div className="text-sm text-amber-800">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

