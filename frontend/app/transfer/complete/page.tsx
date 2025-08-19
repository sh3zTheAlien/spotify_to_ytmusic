import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Music, CheckCircle, AlertTriangle, RotateCcw, Home } from "lucide-react"
import Link from "next/link"

export default function TransferCompletePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">Transfer Complete!</h1>
          <p className="text-slate-300 text-lg mb-12">Your music has been successfully transferred to Spotify</p>

          {/* Transfer Summary */}
          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6">Transfer Summary</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">Successfully Transferred</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Playlists:</span>
                    <span className="text-green-400">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Songs:</span>
                    <span className="text-green-400">1,189</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Artists:</span>
                    <span className="text-green-400">112</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <span className="font-medium">Not Found</span>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>Songs:</span>
                    <span className="text-yellow-400">58</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">Some songs may not be available on Spotify</div>
                </div>
              </div>
            </div>

            {/* Playlist Details */}
            <div className="bg-slate-700 rounded-xl p-4">
              <h3 className="font-medium mb-3">Transferred Playlists</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>• Favorite Songs</span>
                  <span className="text-green-400">191 songs</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>• Liked Songs</span>
                  <span className="text-green-400">255 songs</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>• Mood Vedic hoing</span>
                  <span className="text-green-400">4 songs</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>• Mohiner Ghoraguli</span>
                  <span className="text-green-400">40 songs</span>
                </div>
                <div className="text-slate-400 text-xs mt-2">+ 4 more playlists</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/transfer">
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent px-8 py-3 rounded-full flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Transfer More
              </Button>
            </Link>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="w-8 h-1 bg-green-400 rounded"></div>
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
