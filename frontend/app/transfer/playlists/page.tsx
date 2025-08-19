import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/Header"
import { Music, ArrowLeft, Search, Heart, Album, User, List, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function PlaylistSelectionPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1">
        <div className="bg-purple-600 h-1 w-3/4"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Link href="/transfer/load" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-slate-400">STEP 3/4</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Select playlists to move</h1>

          {/* Account Info */}
          <div className="bg-slate-800 rounded-2xl p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold mb-2">From Your YouTube Music Account</h2>
            </div>

            {/* Main Library */}
            <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl mb-4">
              <div className="flex items-center gap-4">
                <Checkbox defaultChecked className="border-slate-500" />
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">My YouTube Music Music Library</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm">Subham Saha</span>
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
            </div>

            {/* Favorites Section */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                <div className="flex items-center gap-4">
                  <Checkbox defaultChecked className="border-slate-500" />
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Favorite Songs</h3>
                    <p className="text-sm text-slate-400">191/191 selected</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                <div className="flex items-center gap-4">
                  <Checkbox defaultChecked className="border-slate-500" />
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                    <Album className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Favorite Albums</h3>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                <div className="flex items-center gap-4">
                  <Checkbox defaultChecked className="border-slate-500" />
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Favorite Artists</h3>
                    <p className="text-sm text-slate-400">112/112 selected</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Playlists Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <List className="w-5 h-5 text-slate-400" />
                <span className="text-slate-400 font-medium">Playlists (12)</span>
                <div className="flex-1">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search"
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 pl-10 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Checkbox defaultChecked className="border-slate-500" />
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mood Vedic hoing</h3>
                      <p className="text-sm text-slate-400">4/4 selected</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Checkbox defaultChecked className="border-slate-500" />
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Liked Songs</h3>
                      <p className="text-sm text-slate-400">255/255 selected</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Checkbox defaultChecked className="border-slate-500" />
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mohiner Ghoraguli</h3>
                      <p className="text-sm text-slate-400">40/45 selected</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl opacity-50">
                  <div className="flex items-center gap-4">
                    <Checkbox className="border-slate-500" />
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">HIT SONGS</h3>
                      <p className="text-sm text-slate-400">0/62 selected</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700 rounded-xl opacity-50">
                  <div className="flex items-center gap-4">
                    <Checkbox className="border-slate-500" />
                    <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Never give up on your dreams</h3>
                      <p className="text-sm text-slate-400">0/1 selected</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Choose Destination Button */}
            <div className="text-center">
              <Link href="/transfer/destination">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full w-full">
                  Choose Destination
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
