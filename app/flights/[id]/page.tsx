'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Users, Briefcase, Wifi, Utensils, Armchair } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function FlightDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const flightDetails = {
    id: params.id,
    airline: 'AeroFly',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '09:30',
    arrivalTime: '17:45',
    departureDate: 'March 15, 2025',
    duration: '7h 15m',
    price: 450000,
    stops: 0,
    rating: 4.5,
    aircraft: 'Boeing 787 Dreamliner',
    seats: 234,
    availableSeats: 32,
    amenities: [
      { icon: Wifi, label: 'Free WiFi' },
      { icon: Utensils, label: 'Meals Included' },
      { icon: Armchair, label: 'Premium Seats' },
    ],
    baggage: '2x 23kg checked bags, 1x 8kg carry-on'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-2xl font-bold">Flyonair.ng</span>
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Flight Header */}
        <div className="rounded-lg border border-border bg-card p-8 mb-8">
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Flight Info */}
            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">{flightDetails.airline}</h1>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Aircraft:</span> {flightDetails.aircraft}</p>
                <p><span className="font-semibold text-foreground">Flight Duration:</span> {flightDetails.duration}</p>
                <p><span className="font-semibold text-foreground">Stops:</span> {flightDetails.stops === 0 ? 'Direct' : `${flightDetails.stops} stop${flightDetails.stops > 1 ? 's' : ''}`}</p>
                <p><span className="font-semibold text-foreground">Date:</span> {flightDetails.departureDate}</p>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-muted/50 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Price per person</p>
                <p className="text-4xl font-bold text-primary mb-4">₦{flightDetails.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mb-4">{flightDetails.availableSeats} seats available</p>
              </div>
              <Link href={`/checkout?flight=${params.id}`}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6">
                  Continue to Booking
                </Button>
              </Link>
            </div>
          </div>

          {/* Flight Schedule */}
          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-6">Flight Schedule</h2>
            <div className="grid gap-8 md:grid-cols-3 items-center">
              {/* Departure */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Departure</p>
                <p className="text-3xl font-bold">{flightDetails.departureTime}</p>
                <p className="text-sm text-muted-foreground mt-2">{flightDetails.departure}</p>
              </div>

              {/* Duration */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground mb-4">Flight Duration</p>
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-1 h-1 bg-border"></div>
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="flex-1 h-1 bg-border"></div>
                </div>
                <p className="text-sm font-semibold mt-4">{flightDetails.duration}</p>
              </div>

              {/* Arrival */}
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-2">Arrival</p>
                <p className="text-3xl font-bold">{flightDetails.arrivalTime}</p>
                <p className="text-sm text-muted-foreground mt-2">{flightDetails.arrival}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="rounded-lg border border-border bg-card p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Amenities & Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {flightDetails.amenities.map((amenity, idx) => {
              const Icon = amenity.icon
              return (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{amenity.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Baggage Info */}
        <div className="rounded-lg border border-border bg-card p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Baggage Allowance
          </h2>
          <p className="text-foreground">{flightDetails.baggage}</p>
        </div>

        {/* Terms */}
        <div className="rounded-lg border border-border bg-muted/30 p-6 mb-8">
          <h3 className="font-semibold mb-3">Cancellation & Changes</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Free cancellation up to 7 days before departure</li>
            <li>• Changes allowed for a fee of ₦10,000</li>
            <li>• Refund processed within 5-7 business days</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href="/flights" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Back to Results
            </Button>
          </Link>
          <Link href={`/checkout?flight=${params.id}`} className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Book This Flight
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
