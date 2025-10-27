import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Users, MapPin, Video, Home as HomeIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

const poojas = [
  {
    id: 1,
    name: "Satyanarayan Pooja",
    description: "A sacred ritual dedicated to Lord Vishnu for prosperity, peace, and well-being of the family.",
    duration: "2-3 hours",
    participants: "Entire Family",
    price: "₹5,100",
    category: "Prosperity",
    image: "https://images.unsplash.com/photo-1669221498006-9d0e6fa84e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXlhJTIwbGFtcCUyMHByYXllcnxlbnwxfHx8fDE3NjE0OTQ0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Family prosperity", "Removes obstacles", "Brings harmony"],
    rating: 4.8,
    bookings: 127
  },
  {
    id: 2,
    name: "Ganesh Pooja",
    description: "Invoke Lord Ganesha's blessings for new beginnings, success, and removal of obstacles.",
    duration: "1-2 hours",
    participants: "All ages",
    price: "₹3,100",
    category: "New Beginnings",
    image: "https://images.unsplash.com/photo-1548054238-3ad2739292c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaXR1YWwlMjBmbG93ZXJzfGVufDF8fHx8MTc2MTQ5NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Success in ventures", "Wisdom and knowledge", "Removes obstacles"],
    rating: 4.9,
    bookings: 215
  },
  {
    id: 3,
    name: "Lakshmi Pooja",
    description: "Worship of Goddess Lakshmi to attract wealth, abundance, and financial prosperity.",
    duration: "2 hours",
    participants: "Family members",
    price: "₹4,100",
    category: "Wealth",
    image: "https://images.unsplash.com/photo-1757308530438-4e2340a6475f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHB1amElMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjE0OTQ0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Financial growth", "Abundance", "Prosperity"],
    rating: 4.7,
    bookings: 189
  },
  {
    id: 4,
    name: "Griha Pravesh Pooja",
    description: "House warming ceremony to purify and bless your new home before moving in.",
    duration: "3-4 hours",
    participants: "Family & Friends",
    price: "₹7,100",
    category: "Home Blessing",
    image: "https://images.unsplash.com/photo-1741798037832-6c0c86a6262a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMHdvcnNoaXB8ZW58MXx8fHwxNzYxNDk0NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Positive energy", "Home protection", "Family well-being"],
    rating: 4.9,
    bookings: 98
  },
  {
    id: 5,
    name: "Navgraha Pooja",
    description: "Appease the nine celestial bodies to reduce malefic effects and enhance positive influences.",
    duration: "2-3 hours",
    participants: "Individual/Family",
    price: "₹6,100",
    category: "Astrological",
    image: "https://images.unsplash.com/photo-1669221498006-9d0e6fa84e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXlhJTIwbGFtcCUyMHByYXllcnxlbnwxfHx8fDE3NjE0OTQ0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Planetary harmony", "Reduced obstacles", "Better fortune"],
    rating: 4.6,
    bookings: 156
  },
  {
    id: 6,
    name: "Rudrabhishek",
    description: "Sacred abhishekam to Lord Shiva with milk, honey, and holy water for health and peace.",
    duration: "1.5-2 hours",
    participants: "All devotees",
    price: "₹4,500",
    category: "Health & Peace",
    image: "https://images.unsplash.com/photo-1548054238-3ad2739292c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaXR1YWwlMjBmbG93ZXJzfGVufDF8fHx8MTc2MTQ5NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Inner peace", "Physical health", "Spiritual growth"],
    rating: 4.8,
    bookings: 203
  }
];

export function FeaturedPoojas() {
  const [selectedPooja, setSelectedPooja] = useState<typeof poojas[0] | null>(null);
  const [bookingDate, setBookingDate] = useState<Date | undefined>(undefined);
  const [bookingType, setBookingType] = useState<string>("home");
  const [samagriOption, setSamagriOption] = useState<string>("included");

  const handleBooking = () => {
    if (selectedPooja && bookingDate) {
      alert(`Booking confirmed for ${selectedPooja.name} on ${bookingDate.toDateString()}`);
      setSelectedPooja(null);
      setBookingDate(undefined);
      setBookingType("home");
      setSamagriOption("included");
    }
  };

  return (
    <>
      <section id="poojas" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200">
              Featured Services
            </Badge>
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent mb-3">
              Popular Poojas & Kathas
            </h2>
            <p className="text-amber-800">
              Choose from our curated collection of authentic Vedic rituals performed by experienced pandits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poojas.map((pooja) => (
              <Card key={pooja.id} className="group overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pooja.image}
                    alt={pooja.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-white/95 text-orange-600 border-0">
                    {pooja.category}
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      <span className="text-amber-300">★</span>
                      <span className="text-sm">{pooja.rating}</span>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-sm">
                      {pooja.bookings} bookings
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-amber-900">{pooja.name}</CardTitle>
                  <CardDescription className="text-amber-700">{pooja.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-amber-700">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span>{pooja.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-700">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span>{pooja.participants}</span>
                  </div>
                  <div className="text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {pooja.price}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                    onClick={() => setSelectedPooja(pooja)}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPooja} onOpenChange={() => setSelectedPooja(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
              Book {selectedPooja?.name}
            </DialogTitle>
            <DialogDescription className="text-amber-700">
              Fill in your details to confirm your booking
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Booking Type */}
            <div className="space-y-3">
              <Label className="text-amber-900">Booking Type</Label>
              <RadioGroup value={bookingType} onValueChange={setBookingType} className="grid grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="home" id="home" className="peer sr-only" />
                  <Label
                    htmlFor="home"
                    className="flex flex-col items-center justify-between rounded-lg border-2 border-orange-200 bg-white p-4 hover:bg-orange-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer"
                  >
                    <HomeIcon className="mb-2 h-6 w-6 text-orange-600" />
                    <span className="text-sm text-amber-900">At Home</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="online" id="online" className="peer sr-only" />
                  <Label
                    htmlFor="online"
                    className="flex flex-col items-center justify-between rounded-lg border-2 border-orange-200 bg-white p-4 hover:bg-orange-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer"
                  >
                    <Video className="mb-2 h-6 w-6 text-orange-600" />
                    <span className="text-sm text-amber-900">Online</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="temple" id="temple" className="peer sr-only" />
                  <Label
                    htmlFor="temple"
                    className="flex flex-col items-center justify-between rounded-lg border-2 border-orange-200 bg-white p-4 hover:bg-orange-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer"
                  >
                    <MapPin className="mb-2 h-6 w-6 text-orange-600" />
                    <span className="text-sm text-amber-900">At Temple</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-amber-900">Full Name *</Label>
                <Input id="name" placeholder="Enter your name" className="border-orange-200 bg-white" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gotra" className="text-amber-900">Gotra</Label>
                <Input id="gotra" placeholder="Enter your gotra" className="border-orange-200 bg-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-amber-900">Phone Number *</Label>
                <Input id="phone" placeholder="+91 98765 43210" className="border-orange-200 bg-white" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-amber-900">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="border-orange-200 bg-white" />
              </div>
            </div>
            
            {bookingType !== "online" && (
              <div className="space-y-2">
                <Label htmlFor="address" className="text-amber-900">
                  {bookingType === "home" ? "Home Address *" : "Preferred Temple"}
                </Label>
                <Input 
                  id="address" 
                  placeholder={bookingType === "home" ? "Enter your complete address" : "Select temple location"} 
                  className="border-orange-200 bg-white" 
                />
              </div>
            )}

            {/* Date Selection */}
            <div className="space-y-2">
              <Label className="text-amber-900">Select Date & Time *</Label>
              <div className="border-2 border-orange-200 rounded-lg p-4 bg-white">
                <CalendarComponent
                  mode="single"
                  selected={bookingDate}
                  onSelect={setBookingDate}
                  className="rounded-md"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>

            {/* Samagri Option */}
            <div className="space-y-3">
              <Label className="text-amber-900">Pooja Samagri (Materials)</Label>
              <RadioGroup value={samagriOption} onValueChange={setSamagriOption}>
                <div className="flex items-center space-x-2 border-2 border-orange-200 rounded-lg p-3 bg-white">
                  <RadioGroupItem value="included" id="included" />
                  <Label htmlFor="included" className="flex-1 cursor-pointer text-amber-900">
                    <span>Pandit will bring all items</span>
                    <span className="block text-sm text-amber-700">Additional ₹500</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-orange-200 rounded-lg p-3 bg-white">
                  <RadioGroupItem value="user" id="user" />
                  <Label htmlFor="user" className="flex-1 cursor-pointer text-amber-900">
                    <span>I will arrange the items</span>
                    <span className="block text-sm text-amber-700">List will be provided</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Special Instructions */}
            <div className="space-y-2">
              <Label htmlFor="instructions" className="text-amber-900">Special Instructions</Label>
              <Textarea 
                id="instructions" 
                placeholder="Any specific requirements or instructions..." 
                className="border-orange-200 bg-white resize-none"
                rows={3}
              />
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4">
              <h4 className="text-amber-900 mb-3">Booking Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-amber-800">
                  <span>Base Price:</span>
                  <span>{selectedPooja?.price}</span>
                </div>
                {samagriOption === "included" && (
                  <div className="flex justify-between text-amber-800">
                    <span>Samagri:</span>
                    <span>₹500</span>
                  </div>
                )}
                <div className="border-t border-orange-200 pt-2 flex justify-between">
                  <span className="text-amber-900">Total:</span>
                  <span className="text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ₹{selectedPooja ? parseInt(selectedPooja.price.replace(/[₹,]/g, '')) + (samagriOption === "included" ? 500 : 0) : 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setSelectedPooja(null)} className="border-orange-300 text-orange-600 hover:bg-orange-50">
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              onClick={handleBooking}
              disabled={!bookingDate}
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

