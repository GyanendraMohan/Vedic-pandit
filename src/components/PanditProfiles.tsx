import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, MapPin, Languages, Award, Calendar, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pandits = [
  {
    id: 1,
    name: "Pandit Rajesh Sharma",
    image: "https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYW5kaXQlMjBwcmllc3R8ZW58MXx8fHwxNzYxNDk1NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    experience: "15 Years",
    rating: 4.9,
    reviews: 234,
    specialization: ["Griha Shanti", "Navgraha Pooja", "Wedding Ceremonies"],
    languages: ["Hindi", "English", "Sanskrit"],
    location: "Mumbai, Maharashtra",
    price: "₹1,500/hour",
    availability: "Available",
    description: "Experienced Vedic pandit specializing in Griha Pravesh and Navgraha poojas. Well-versed in all Hindu rituals and ceremonies.",
    completedPoojas: 500,
    expertise: ["Vastu Shanti", "Satyanarayan Katha", "Rudrabhishek"]
  },
  {
    id: 2,
    name: "Pandit Anil Mishra",
    image: "https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYW5kaXQlMjBwcmllc3R8ZW58MXx8fHwxNzYxNDk1NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    experience: "20 Years",
    rating: 4.8,
    reviews: 189,
    specialization: ["Katha Recitation", "Festival Poojas", "Havan"],
    languages: ["Hindi", "Bengali", "Sanskrit"],
    location: "Delhi NCR",
    price: "₹1,800/hour",
    availability: "Available",
    description: "Renowned katha vachak with expertise in Ramayan, Bhagwat, and other sacred texts. Known for melodious recitation.",
    completedPoojas: 650,
    expertise: ["Sunderkand Path", "Bhagwat Katha", "Durga Pooja"]
  },
  {
    id: 3,
    name: "Pandit Suresh Joshi",
    image: "https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYW5kaXQlMjBwcmllc3R8ZW58MXx8fHwxNzYxNDk1NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    experience: "12 Years",
    rating: 4.7,
    reviews: 156,
    specialization: ["Astrology Consultation", "Muhurat", "Yagya"],
    languages: ["Hindi", "Marathi", "English", "Sanskrit"],
    location: "Pune, Maharashtra",
    price: "₹1,200/hour",
    availability: "Busy until Nov 15",
    description: "Expert astrologer and pandit offering personalized pooja recommendations based on kundli and planetary positions.",
    completedPoojas: 420,
    expertise: ["Navgraha Shanti", "Graha Pravesh Muhurat", "Kundli Matching"]
  },
  {
    id: 4,
    name: "Pandit Vikas Pandey",
    image: "https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwYW5kaXQlMjBwcmllc3R8ZW58MXx8fHwxNzYxNDk1NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    experience: "18 Years",
    rating: 4.9,
    reviews: 278,
    specialization: ["Shradh Ceremonies", "Pind Daan", "Last Rites"],
    languages: ["Hindi", "Sanskrit", "Kannada"],
    location: "Bangalore, Karnataka",
    price: "₹1,600/hour",
    availability: "Available",
    description: "Compassionate and knowledgeable pandit specializing in ancestral rituals and shradh ceremonies.",
    completedPoojas: 580,
    expertise: ["Pitru Paksha", "Tarpan", "Shradh Pooja"]
  }
];

export function PanditProfiles() {
  return (
    <section id="pandits" className="py-12 md:py-16 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200">
            Expert Pandits
          </Badge>
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-3">
            Our Learned Pandits
          </h2>
          <p className="text-amber-800">
            Experienced and qualified pandits ready to perform authentic Vedic rituals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pandits.map((pandit) => (
            <Card key={pandit.id} className="group overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-md opacity-50"></div>
                    <Avatar className="h-24 w-24 border-4 border-white shadow-lg relative">
                      <AvatarImage src={pandit.image} alt={pandit.name} />
                      <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                        {pandit.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <h3 className="text-amber-900">{pandit.name}</h3>
                
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded-full">
                    <Star className="h-3 w-3 text-amber-600 fill-amber-600" />
                    <span className="text-sm text-amber-900">{pandit.rating}</span>
                  </div>
                  <span className="text-sm text-amber-700">({pandit.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-amber-700">
                  <Award className="h-4 w-4 text-orange-600" />
                  <span>{pandit.experience} Experience</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm text-amber-700">
                  <MapPin className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                  <span>{pandit.location}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm text-amber-700">
                  <Languages className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                  <span>{pandit.languages.join(', ')}</span>
                </div>
                
                <div>
                  <p className="text-xs text-amber-600 mb-2">Specialization:</p>
                  <div className="flex flex-wrap gap-1">
                    {pandit.specialization.slice(0, 2).map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="border-orange-200 text-orange-700 text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {pandit.price}
                  </div>
                  <Badge className={`mt-1 ${
                    pandit.availability === "Available" 
                      ? "bg-green-100 text-green-700 border-green-200" 
                      : "bg-amber-100 text-amber-700 border-amber-200"
                  }`}>
                    {pandit.availability}
                  </Badge>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50">
                    <DialogHeader>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border-4 border-orange-200">
                          <AvatarImage src={pandit.image} alt={pandit.name} />
                          <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                            {pandit.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <DialogTitle className="text-2xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
                            {pandit.name}
                          </DialogTitle>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-amber-600 fill-amber-600" />
                              <span className="text-amber-900">{pandit.rating}</span>
                              <span className="text-sm text-amber-700">({pandit.reviews})</span>
                            </div>
                            <Separator orientation="vertical" className="h-4" />
                            <span className="text-sm text-amber-800">{pandit.completedPoojas}+ poojas</span>
                          </div>
                        </div>
                      </div>
                      <DialogDescription className="text-amber-700 mt-4">
                        {pandit.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 py-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-amber-900 mb-2 flex items-center gap-2">
                              <Award className="h-4 w-4 text-orange-600" />
                              Experience
                            </h4>
                            <p className="text-amber-700">{pandit.experience} in Vedic rituals</p>
                          </div>
                          
                          <div>
                            <h4 className="text-amber-900 mb-2 flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-orange-600" />
                              Location
                            </h4>
                            <p className="text-amber-700">{pandit.location}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-amber-900 mb-2 flex items-center gap-2">
                              <Languages className="h-4 w-4 text-orange-600" />
                              Languages
                            </h4>
                            <p className="text-amber-700">{pandit.languages.join(', ')}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-amber-900 mb-2">Specialization</h4>
                            <div className="flex flex-wrap gap-2">
                              {pandit.specialization.map((spec, idx) => (
                                <Badge key={idx} className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-amber-900 mb-2">Areas of Expertise</h4>
                            <ul className="space-y-1">
                              {pandit.expertise.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-amber-700">
                                  <span className="text-orange-600">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="bg-orange-200" />
                      
                      <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-amber-900">Price</span>
                          <span className="text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            {pandit.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-amber-900">Availability</span>
                          <Badge className={
                            pandit.availability === "Available" 
                              ? "bg-green-100 text-green-700 border-green-200" 
                              : "bg-amber-100 text-amber-700 border-amber-200"
                          }>
                            {pandit.availability}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 gap-2">
                          <Calendar className="h-4 w-4" />
                          Book Pandit
                        </Button>
                        <Button variant="outline" className="gap-2 border-orange-300 text-orange-600 hover:bg-orange-50">
                          <Phone className="h-4 w-4" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
