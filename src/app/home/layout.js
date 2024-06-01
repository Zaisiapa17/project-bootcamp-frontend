import {
    Award,
    BarChart3,
    Home,
    Library,
    LineChart,
    ListMusic,
    Mic2,
    Music2,
    Play,
    User,
} from "lucide-react";
import { Button } from '@/components/ui/button'

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <main className="grid grid-cols-6 grid-rows-8 h-screen gap-4 bg-slate-100">
            <div className="col-span-1 row-span-8 bg-white">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="w-full justify-start"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LineChart className="mr-2 h-4 w-4" />
                            Popular
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Play className="mr-2 h-4 w-4" />
                            Now Playing
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Award className="mr-2 h-4 w-4" />
                            Top Rated
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Upcoming
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-5 row-span-1 bg-white rounded-bl-lg">
                <div className="flex items-center justify-between h-full px-5">
                    <h1>Home</h1>
                    <h1>Home</h1>
                </div>
            </div>
            <div className="col-span-5 row-span-7 bg-white rounded-tl-lg">
                {children}
            </div>
        </main>
    )
}