import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MapPreview from '../components/MapPreview'
import api from '../services/api'

export default function Home() {
  const navigate = useNavigate()
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [loading, setLoading] = useState(false)

  const handleBookRide = async (e) => {
    e.preventDefault()
    if (!pickup || !dropoff) {
      alert('Please enter both pickup and dropoff locations')
      return
    }
    setLoading(true)
    try {
      await api.post('/rides', { pickup, dropoff })
      navigate('/dashboard')
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#08090D] text-white p-8">
      {/* Hero Header */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold mb-2">🏍 RideMate</h1>
        <p className="text-gray-400 text-lg">Where every ride tells a story</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">Total Rides</h3>
          <p className="text-4xl font-bold text-[#CCFF00] mt-2">24</p>
        </div>
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">Rating</h3>
          <p className="text-4xl font-bold text-[#CCFF00] mt-2">4.8 ⭐</p>
        </div>
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">This Month</h3>
          <p className="text-4xl font-bold text-[#CCFF00] mt-2">$340</p>
        </div>
      </div>

      {/* Book Ride Section */}
      <div className="glass p-8 rounded-3xl mb-12">
        <h2 className="text-3xl font-bold mb-6">Book Your Ride</h2>
        <form onSubmit={handleBookRide} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Pickup Location</label>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CCFF00]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Drop-off Location</label>
            <input
              type="text"
              placeholder="Enter dropoff location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CCFF00]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#CCFF00] text-black font-bold py-3 rounded-xl hover:bg-[#BBFF00] transition disabled:opacity-50"
          >
            {loading ? 'Booking...' : 'Find Ride'}
          </button>
        </form>
      </div>

      {/* Map Preview */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Service Area</h3>
        <MapPreview center={[13.0827, 80.2707]} zoom={12} />
      </div>

      {/* Shortcut Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '💼', label: 'Work' },
          { icon: '🏥', label: 'Hospital' },
          { icon: '🍽️', label: 'Restaurant' },
        ].map((action, i) => (
          <button
            key={i}
            className="glass p-6 rounded-2xl text-center hover:bg-white/15 transition"
          >
            <div className="text-4xl mb-2">{action.icon}</div>
            <p className="text-sm">{action.label}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
