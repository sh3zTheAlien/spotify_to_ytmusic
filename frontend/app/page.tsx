import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { ArrowRight, Music, Users, Download } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">How does Transferring work?</h1>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <p className="text-slate-300 mb-8 max-w-xs mx-auto">
              Link your source and destination accounts, and authorize TuneMyMusic to do the work for you!
            </p>
            <div className="bg-purple-600 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="w-8 h-1 bg-orange-400 rounded"></div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <p className="text-slate-300 mb-8 max-w-xs mx-auto">
              Select what to transfer - we support your favorite songs, artists, albums, and your curated playlists.
            </p>
            <div className="bg-purple-600 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-8 h-1 bg-orange-400 rounded"></div>
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <p className="text-slate-300 mb-8 max-w-xs mx-auto">
              Done! Your playlists and music will be automatically transferred to your destination account.
            </p>
            <div className="bg-purple-600 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div className="w-8 h-1 bg-orange-400 rounded"></div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/transfer">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full">
              Start transferring
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
