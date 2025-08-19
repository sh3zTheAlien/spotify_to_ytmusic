import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Music, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DestinationPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1">
        <div className="bg-purple-600 h-1 w-full"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Link href="/transfer/playlists" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-slate-400">STEP 4/4</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12">Connect your destination account</h1>

          {/* Destination Selection */}
          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Transfer TO Spotify</h2>

            <div className="space-y-4 mb-8">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-green-600" />
                </div>
                Connect Spotify Account
              </button>
            </div>

            {/* Transfer Summary */}
            <div className="bg-slate-700 rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-4">Transfer Summary</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Playlists selected:</span>
                  <span>8 playlists</span>
                </div>
                <div className="flex justify-between">
                  <span>Total songs:</span>
                  <span>1,247 songs</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated time:</span>
                  <span>5-10 minutes</span>
                </div>
              </div>
            </div>

            <Link href="/transfer/progress">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full w-full flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Start Transfer
              </Button>
            </Link>
          </div>

          {/* Transfer Direction Indicator */}
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="w-8 h-1 bg-orange-400 rounded"></div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
