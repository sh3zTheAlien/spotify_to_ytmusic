"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

const platforms = {
  youtube: {
    name: "YouTube Music",
    logo: (
      <Image
        src="/Youtube.png"
        alt="YouTube Music Logo"
        width={128}
        height={128}
      />
    ),
    color: "bg-red-600",
  },
  spotify: {
    name: "Spotify",
    logo: (
      <Image src="/Spotify.png" alt="Spotify Logo" width={128} height={128} />
    ),
    color: "bg-green-600",
  },
}

export default function SourceSelectionPage() {
  const [sourcePlatform, setSourcePlatform] = useState<string | null>(null)
  const [destinationPlatform, setDestinationPlatform] = useState<string | null>(
    null
  )
  const router = useRouter()

  const handleContinue = () => {
    if (!sourcePlatform || !destinationPlatform) {
      toast.error("Please select both a source and a destination platform.")
    } else if (sourcePlatform === destinationPlatform) {
      toast.error("Source and destination platforms cannot be the same.")
    } else {
      router.push(`/transfer/load?source=${sourcePlatform}&destination=${destinationPlatform}`);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1">
        <div className="bg-purple-600 h-1 w-1/4"></div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => router.back()}
              className="text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-slate-400">STEP 1/4</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            Select your music platforms
          </h1>

          {/* Platform Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Source Platform */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">Transfer FROM</h2>
              <Select onValueChange={setSourcePlatform}>
                <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white py-6">
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(platforms).map(([key, platform]) => (
                    <SelectItem key={key} value={key}>
                      {platform.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Destination Platform */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-6">Transfer TO</h2>
              <Select onValueChange={setDestinationPlatform}>
                <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white py-6">
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(platforms).map(([key, platform]) => (
                    <SelectItem key={key} value={key}>
                      {platform.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Transfer Direction Indicator */}
          <div className="bg-slate-800 rounded-2xl p-8 mb-12 min-h-80 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div
                className={`w-32 h-32 ${
                  sourcePlatform
                    ? platforms[sourcePlatform as keyof typeof platforms].color
                    : "bg-slate-700"
                } rounded-full flex items-center justify-center transition-colors`}
              >
                {sourcePlatform &&
                  platforms[sourcePlatform as keyof typeof platforms].logo}
              </div>
              <div className="w-3 h-12 md:w-24 md:h-3 bg-orange-400 rounded"></div>
              <div
                className={`w-32 h-32 ${
                  destinationPlatform
                    ? platforms[destinationPlatform as keyof typeof platforms]
                        .color
                    : "bg-slate-700"
                } rounded-full flex items-center justify-center transition-colors`}
              >
                {destinationPlatform &&
                  platforms[destinationPlatform as keyof typeof platforms]
                    .logo}
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleContinue}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full flex items-center gap-2"
            >
              Continue
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
