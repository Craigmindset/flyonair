'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Calendar, Users, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Flight {
  id: string
  airline: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  stops: number
  rating: number
}

const mockFlights: Flight[] = [
  {
    id: '1',
    airline: 'AeroFly',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '09:30',
    arrivalTime: '17:45',
    duration: '7h 15m',
    price: 450000,
    stops: 0,
    rating: 4.5
  },
  {
    id: '2',
    airline: 'TransAir',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '14:00',
    arrivalTime: '23:30',
    duration: '9h 30m',
    price: 320000,
    stops: 1,
    rating: 4.2
  },
  {
    id: '3',
    airline: 'SkyWings',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '16:45',
    arrivalTime: '08:15 +1',
    duration: '8h 30m',
    price: 380000,
    stops: 0,
    rating: 4.7
  },
  {
    id: '4',
    airline: 'AeroFly',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '11:00',
    arrivalTime: '19:30',
    duration: '7h 30m',
    price: 520000,
    stops: 0,
    rating: 4.5
  },
  {
    id: '5',
    airline: 'GlobalAir',
    departure: 'Lagos (LOS)',
    arrival: 'London (LHR)',
    departureTime: '13:15',
    arrivalTime: '22:00',
    duration: '8h 45m',
    price: 290000,
    stops: 2,
    rating: 3.9
  },
]

export default function FlightsPage() {
  const [sortBy, setSortBy] = useState('price')
  const [selectedFilters, setSelectedFilters] = useState({
    maxPrice: 1000000,
    stops: 'any'
  })

  const filteredFlights = mockFlights
    .filter(flight => flight.price <= selectedFilters.maxPrice)
    .filter(flight => {
      if (selectedFilters.stops === 'any') return true
      if (selectedFilters.stops === 'direct') return flight.stops === 0
      if (selectedFilters.stops === 'one') return flight.stops <= 1
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration)
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-2xl font-bold">Flyonair.ng</span>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Filters</h3>

              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={selectedFilters.maxPrice}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, maxPrice: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-sm text-muted-foreground">
                  Up to ₦{(selectedFilters.maxPrice).toLocaleString()}
                </div>
              </div>

              {/* Stops */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Stops</label>
                <div className="space-y-2">
                  {['any', 'direct', 'one'].map(stop => (
                    <label key={stop} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="stops"
                        value={stop}
                        checked={selectedFilters.stops === stop}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, stops: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm capitalize">{stop === 'any' ? 'Any' : stop === 'direct' ? 'Direct' : '1 Stop'}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent" onClick={() => setSelectedFilters({ maxPrice: 1000000, stops: 'any' })}>
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-4">
            {/* Sort */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{filteredFlights.length} flights found</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="price">Lowest Price</option>
                <option value="duration">Shortest Duration</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>

            {/* Flight Cards */}
            {filteredFlights.map(flight => (
              <Link key={flight.id} href={`/flights/${flight.id}`}>
                <div className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition cursor-pointer">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-center">
                    {/* Airline */}
                    <div>
                      <p className="text-sm text-muted-foreground">Airline</p>
                      <p className="font-semibold text-foreground">{flight.airline}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="text-sm font-medium">{flight.rating}</span>
                      </div>
                    </div>

                    {/* Departure & Arrival */}
                    <div>
                      <p className="text-sm text-muted-foreground">Route</p>
                      <p className="font-semibold">{flight.departure.split(' ')[1]}</p>
                      <p className="text-xs text-muted-foreground">{flight.departureTime}</p>
                      <p className="text-xs text-muted-foreground mt-1">{flight.departure}</p>
                    </div>

                    {/* Duration */}
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold flex items-center gap-2">{flight.duration}</p>
                      <p className="text-xs text-muted-foreground">{flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</p>
                    </div>

                    {/* Arrival */}
                    <div>
                      <p className="text-sm text-muted-foreground">To</p>
                      <p className="font-semibold">{flight.arrival.split(' ')[1]}</p>
                      <p className="text-xs text-muted-foreground">{flight.arrivalTime}</p>
                      <p className="text-xs text-muted-foreground mt-1">{flight.arrival}</p>
                    </div>

                    {/* Price & Action */}
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">From</p>
                      <p className="text-2xl font-bold text-primary">₦{(flight.price).toLocaleString()}</p>
                      <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Select
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
