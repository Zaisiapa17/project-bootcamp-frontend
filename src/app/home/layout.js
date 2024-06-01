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
    Radio,
    User,
} from "lucide-react";
import { Button } from '@/components/ui/button'

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <main className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-3 space-y-4 py-4 bg-red-500">
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
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                        Library
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <ListMusic className="mr-2 h-4 w-4" />
                            Playlists
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Music2 className="mr-2 h-4 w-4" />
                            Songs
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <User className="mr-2 h-4 w-4" />
                            Made for You
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Mic2 className="mr-2 h-4 w-4" />
                            Artists
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Library className="mr-2 h-4 w-4" />
                            Albums
                        </Button>
                    </div>
                </div>
            </div>
            <div class="col-span-2 bg-green-500">02</div>
            <div class="row-span-2 col-span-2 bg-orange-500">
            {children}
            </div>
        </main>
    )
}