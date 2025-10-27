import { Button } from "./ui/button";
import { Menu, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Poojas", href: "#poojas" },
    { name: "Pandits", href: "#pandits" },
    { name: "My Bookings", href: "#bookings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200/50 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50/30 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-red-600 animate-pulse opacity-20"></div>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-amber-600 to-red-700 shadow-lg">
              <span className="text-white text-xl">🕉</span>
            </div>
          </div>
          <div>
            <h1 className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-700 bg-clip-text text-transparent">
              DivyaSeva
            </h1>
            <p className="text-xs text-amber-800">Divine Rituals & Blessings</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-amber-900 hover:text-orange-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2 text-amber-900 hover:text-orange-600 hover:bg-amber-100">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-md">
            <Calendar className="h-4 w-4" />
            <span>Book Now</span>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-orange-600">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                <span className="text-white text-xl">🕉</span>
              </div>
              <div>
                <h2 className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">DivyaSeva</h2>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-amber-900 hover:text-orange-600 transition-colors py-2 px-3 rounded-lg hover:bg-amber-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-amber-200">
                <Button variant="outline" size="sm" className="gap-2 w-full border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </Button>
                <Button className="gap-2 w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  <Calendar className="h-4 w-4" />
                  <span>Book Now</span>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
