"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/Header"
import { Music, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function LoadPlaylistPage() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || 'YouTube Music'; // Default to YouTube Music
  const destination = searchParams.get('destination') || 'Spotify'; // Default to Spotify

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1">
        <div className="bg-purple-600 h-1 w-1/2"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Link href="/transfer/source" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-slate-400">STEP 2/4</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12">Load your {source} music from</h1>

          {/* Transfer Options */}
          <div className="bg-slate-800 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="flex flex-col gap-6">
              {/* Load from Account Button */}
              <Link href="/transfer/playlists">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-full text-lg w-full">
                  Load from {source} account
                </Button>
              </Link>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-600"></div>
                <span className="text-slate-400 text-lg">Or</span>
                <div className="flex-1 h-px bg-slate-600"></div>
              </div>

              {/* URL Input Section */}
              <div className="text-left">
                <label className="block text-slate-300 mb-3">Copy {source} playlist URL and paste here:</label>
                <Input
                  placeholder={`Paste ${source} playlist URL here`}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 mb-4"
                />
                <Link href="/transfer/playlists">
                  <Button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-full w-full">
                    Load from URL
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-slate-400" />
              <div className="w-8 h-1 bg-orange-400 rounded"></div>
              <Music className="w-8 h-8 text-slate-400" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
