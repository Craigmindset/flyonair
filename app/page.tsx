import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Plane,
  Clock,
  Shield,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">
                Flyonair.ng
              </span>
            </div>
            <div className="hidden gap-8 md:flex">
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary transition"
              >
                Features
              </a>
              <a
                href="/"
                className="text-sm font-medium hover:text-primary transition"
              >
                Flights
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition"
              >
                Contact
              </a>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="hidden sm:flex bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 sm:py-32"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Fly Anywhere, Anytime
            </h1>
            <p className="mt-6 text-lg text-white/90 text-balance">
              Discover the best flight deals with Flyonair.ng. Fast booking,
              secure payment, 24/7 support.
            </p>
            <div className="mt-10 flex gap-4 justify-center flex-wrap">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6">
                Start Booking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-base px-8 py-6 bg-transparent"
              >
                Explore Deals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="relative -mt-20 mb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  From
                </label>
                <div className="flex items-center gap-2 rounded border border-border bg-muted px-3 py-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Departure"
                    className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  To
                </label>
                <div className="flex items-center gap-2 rounded border border-border bg-muted px-3 py-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Arrival"
                    className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Date
                </label>
                <div className="flex items-center gap-2 rounded border border-border bg-muted px-3 py-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="date"
                    className="flex-1 bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Passengers
                </label>
                <div className="flex items-center gap-2 rounded border border-border bg-muted px-3 py-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <select className="flex-1 bg-transparent outline-none">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3+ Passengers</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-primary text-primary-foreground font-semibold py-3 rounded hover:bg-primary/90 transition">
              Search Flights
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 sm:py-32"
        style={{
          backgroundImage: "url(/section-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Why Choose Flyonair.ng?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the best flight booking platform with features designed
              for you.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Instant Bookings
              </h3>
              <p className="text-muted-foreground">
                Book your flight in under 60 seconds with our streamlined
                booking process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Secure Payment
              </h3>
              <p className="text-muted-foreground">
                Your payment data is protected with industry-leading encryption.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-3">
                <Plane className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Best Prices
              </h3>
              <p className="text-muted-foreground">
                Compare flights from all airlines and save up to 40% on your
                tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-20 sm:py-32"
        style={{
          backgroundImage: "url(/pattern-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Ready to Explore the World?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Join thousands of travelers who trust Flyonair.ng for their flights.
          </p>
          <Button className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6">
            Book Your Flight Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 text-primary" />
                <span className="font-bold text-primary">Flyonair.ng</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Nigeria's trusted flight booking platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Flights
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Flyonair.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
