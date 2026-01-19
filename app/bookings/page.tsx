'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, MapPin, Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Booking {
  id: string
  reference: string
  airline: string
  departure: string
  arrival: string
  departureDate: string
  departureTime: string
  arrivalTime: string
  passengers: number
  status: 'confirmed' | 'pending' | 'cancelled'
  totalPrice: number
  bookingDate: string
}

const mockBookings: Booking[] = [
  {
    id: '1',
    reference: 'FLY123456',
    airline: 'AeroFly',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureDate: 'March 15, 2025',
    departureTime: '09:30',
    arrivalTime: '17:45',
    passengers: 1,
    status: 'confirmed',
    totalPrice: 495000,
    bookingDate: 'March 1, 2025'
  },
  {
    id: '2',
    reference: 'FLY789012',
    airline: 'TransAir',
    departure: 'Lagos (LOS)',
    arrival: 'New York (JFK)',
    departureDate: 'April 20, 2025',
    departureTime: '14:00',
    arrivalTime: '23:30',
    passengers: 2,
    status: 'confirmed',
    totalPrice: 704000,
    bookingDate: 'March 5, 2025'
  },
  {
    id: '3',
    reference: 'FLY345678',
    airline: 'SkyWings',
    departure: 'Lagos (LOS)',
    arrival: 'Johannesburg (JNB)',
    departureDate: 'March 10, 2025',
    departureTime: '06:00',
    arrivalTime: '10:15',
    passengers: 1,
    status: 'pending',
    totalPrice: 250000,
    bookingDate: 'March 2, 2025'
  }
]

export default function BookingsPage() {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'pending' | 'cancelled'>('all')

  const filteredBookings = mockBookings.filter(booking => {
    if (filter === 'all') return true
    return booking.status === filter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-700 border-green-500/20'
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
      case 'cancelled':
        return 'bg-red-500/10 text-red-700 border-red-500/20'
      default:
        return ''
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-5 w-5" />
      case 'pending':
        return <AlertCircle className="h-5 w-5" />
      case 'cancelled':
        return <AlertCircle className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-2xl font-bold">Flyonair.ng</span>
            </Link>
            <h1 className="text-xl font-bold">My Bookings</h1>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {(['all', 'confirmed', 'pending', 'cancelled'] as const).map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === status
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <p className="text-muted-foreground mb-4">No {filter !== 'all' ? filter : ''} bookings found</p>
              <Link href="/flights">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Flight
                </Button>
              </Link>
            </div>
          ) : (
            filteredBookings.map(booking => (
              <div key={booking.id} className="rounded-lg border border-border bg-card hover:border-primary/50 transition">
                <div className="p-6">
                  <div className="grid gap-6 lg:grid-cols-5 items-center mb-6 pb-6 border-b border-border lg:border-b-0">
                    {/* Booking Info */}
                    <div>
                      <p className="text-sm text-muted-foreground">Booking Reference</p>
                      <p className="text-lg font-bold text-primary">{booking.reference}</p>
                      <p className="text-xs text-muted-foreground mt-1">Booked: {booking.bookingDate}</p>
                    </div>

                    {/* Flight Info */}
                    <div>
                      <p className="text-sm text-muted-foreground">{booking.airline}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold">{booking.departure.split(' ')[1]}</span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-bold">{booking.arrival.split(' ')[1]}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{booking.departureDate}</p>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{booking.departureTime}</p>
                        <p className="text-xs text-muted-foreground">→ {booking.arrivalTime}</p>
                      </div>
                    </div>

                    {/* Passengers & Price */}
                    <div>
                      <p className="text-sm text-muted-foreground">{booking.passengers} Passenger{booking.passengers > 1 ? 's' : ''}</p>
                      <p className="text-2xl font-bold text-primary mt-2">₦{booking.totalPrice.toLocaleString()}</p>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-center">
                      <div className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span>{booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Download Ticket
                    </Button>
                    <Button variant="outline">View Details</Button>
                    {booking.status === 'confirmed' && (
                      <Button variant="outline" className="text-destructive hover:bg-destructive/10 border-destructive/20 bg-transparent">
                        Cancel Booking
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Additional Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-bold mb-4">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about your booking? Our support team is here to help.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Contact Support
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-bold mb-4">Book Another Flight</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ready for your next adventure? Search and book new flights.
            </p>
            <Link href="/flights" className="block">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Search Flights
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
