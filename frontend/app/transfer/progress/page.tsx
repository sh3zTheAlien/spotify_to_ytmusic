"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Music, CheckCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TransferProgressPage() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("Connecting to Spotify...")

  useEffect(() => {
    const steps = [
      "Connecting to Spotify...",
      "Analyzing playlists...",
      "Matching songs...",
      "Creating playlists...",
      "Transfer complete!",
    ]

    let stepIndex = 0
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 20
        if (newProgress <= 100) {
          setCurrentStep(steps[Math.floor(newProgress / 20)])
          return newProgress
        }
        clearInterval(interval)
        return 100
      })
      stepIndex++
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">Transferring your music</h1>

          {/* Progress Circle */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="rgb(71 85 105)" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgb(147 51 234)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{progress}%</div>
                {progress === 100 && <CheckCircle className="w-8 h-8 text-green-500 mx-auto mt-2" />}
              </div>
            </div>
          </div>

          {/* Current Step */}
          <div className="bg-slate-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              {progress < 100 ? (
                <Clock className="w-6 h-6 text-purple-400 animate-spin" />
              ) : (
                <CheckCircle className="w-6 h-6 text-green-500" />
              )}
              <span className="text-lg font-medium">{currentStep}</span>
            </div>

            {progress === 100 && (
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Playlists transferred:</span>
                  <span className="text-green-400">8/8</span>
                </div>
                <div className="flex justify-between">
                  <span>Songs matched:</span>
                  <span className="text-green-400">1,189/1,247</span>
                </div>
                <div className="flex justify-between">
                  <span>Success rate:</span>
                  <span className="text-green-400">95.3%</span>
                </div>
              </div>
            )}
          </div>

          {progress === 100 && (
            <div className="space-y-4">
              <Link href="/transfer/complete">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full flex items-center gap-2 mx-auto">
                  View Results
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          )}

          {/* Transfer Direction Indicator */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="w-8 h-1 bg-orange-400 rounded animate-pulse"></div>
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
