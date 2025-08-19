import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">AudioPorter</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button className="text-slate-300 hover:text-white transition-colors">Quick actions</button>
          <button className="text-slate-300 hover:text-white transition-colors">Help</button>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
            Login
          </Button>
        </nav>
      </div>
    </header>
  );
}
