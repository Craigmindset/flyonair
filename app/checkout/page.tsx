'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Suspense } from 'react'

const Loading = () => null

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const flightId = searchParams.get('flight')

  const [step, setStep] = useState(1)
  const [passengers, setPassengers] = useState([
    { title: 'Mr', firstName: '', lastName: '', email: '', phone: '' }
  ])
  const [paymentMethod, setPaymentMethod] = useState('card')

  const flightPrice = 450000

  const handleAddPassenger = () => {
    setPassengers([...passengers, { title: 'Mr', firstName: '', lastName: '', email: '', phone: '' }])
  }

  const handlePassengerChange = (idx: number, field: string, value: string) => {
    const updated = [...passengers]
    updated[idx] = { ...updated[idx], [field]: value }
    setPassengers(updated)
  }

  const totalPrice = flightPrice * passengers.length

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/flights" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-2xl font-bold">Flyonair.ng</span>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4 flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                    s <= step 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {s < step ? <Check className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-1 ${s < step ? 'bg-primary' : 'bg-border'}`}></div>}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {step === 1 && 'Step 1: Passenger Information'}
              {step === 2 && 'Step 2: Contact & Seat Selection'}
              {step === 3 && 'Step 3: Payment'}
            </p>

            {/* Step 1: Passengers */}
            {step === 1 && (
              <div className="space-y-6 rounded-lg border border-border bg-card p-8">
                <h2 className="text-2xl font-bold">Passenger Information</h2>
                
                {passengers.map((passenger, idx) => (
                  <div key={idx} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <h3 className="font-semibold">Passenger {idx + 1}</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <select
                          value={passenger.title}
                          onChange={(e) => handlePassengerChange(idx, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>Mr</option>
                          <option>Ms</option>
                          <option>Mrs</option>
                          <option>Dr</option>
                        </select>
                      </div>
                      <div className="sm:col-span-1"></div>
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          value={passenger.firstName}
                          onChange={(e) => handlePassengerChange(idx, 'firstName', e.target.value)}
                          placeholder="First name"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          value={passenger.lastName}
                          onChange={(e) => handlePassengerChange(idx, 'lastName', e.target.value)}
                          placeholder="Last name"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={handleAddPassenger} className="w-full bg-transparent">
                  + Add Another Passenger
                </Button>

                <Button onClick={() => setStep(2)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Continue to Seat Selection
                </Button>
              </div>
            )}

            {/* Step 2: Contact & Seats */}
            {step === 2 && (
              <div className="space-y-6 rounded-lg border border-border bg-card p-8">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 700 000 0000"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-bold mb-4">Select Seats</h3>
                  <div className="grid grid-cols-6 gap-2 mb-6">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <button
                        key={i}
                        className="w-full aspect-square bg-muted hover:bg-accent rounded text-xs font-medium transition"
                      >
                        {String.fromCharCode(65 + Math.floor(i / 6))}{(i % 6) + 1}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">Select {passengers.length} seat{passengers.length > 1 ? 's' : ''}</p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-6 rounded-lg border border-border bg-card p-8">
                <h2 className="text-2xl font-bold">Payment Method</h2>
                
                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                    { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                    { id: 'wallet', label: 'Digital Wallet', icon: '📱' },
                  ].map(method => (
                    <label key={method.id} className="flex items-center gap-4 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-6 border-t border-border">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input type="text" placeholder="123" className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => router.push('/bookings')} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Complete Booking
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6 space-y-6">
              <h3 className="text-lg font-bold">Booking Summary</h3>

              {/* Flight Info */}
              <div className="pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">AeroFly</p>
                <p className="font-semibold">Lagos → London</p>
                <p className="text-sm text-muted-foreground mt-2">March 15, 2025 | 09:30 - 17:45</p>
              </div>

              {/* Passengers */}
              <div className="pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">Passengers</p>
                <p className="font-semibold">{passengers.length} Adult{passengers.length > 1 ? 's' : ''}</p>
              </div>

              {/* Pricing */}
              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span>Flight × {passengers.length}</span>
                  <span>₦{(flightPrice * passengers.length).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes & Fees</span>
                  <span>₦{(totalPrice * 0.1).toLocaleString()}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">₦{(totalPrice * 1.1).toLocaleString()}</span>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-xs">
                <input type="checkbox" className="mt-1 w-4 h-4" />
                <span className="text-muted-foreground">
                  I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and <a href="#" className="text-primary hover:underline">privacy policy</a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const unstable_getServerSession = () => {
  return null
}
