import {
    Award,
    BarChart3,
    Home,
    LineChart,
    LogOut,
    Play,
} from "lucide-react";
import { Button } from '@/components/ui/button'
import { DarkModeDashboard } from "@/components/DarkModeDashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <main className="grid grid-cols-6 grid-rows-12 h-screen gap-4 bg-slate-100 dark:bg-slate-800">
            <div className="col-span-1 row-span-12 grid content-between bg-white dark:bg-slate-900">
                <div className="px-4 py-2">
                    <div className="flex items-center my-4 ">
                        <Avatar>
                            <AvatarImage src="https://github.com/Zaisiapa17.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2 className="px-2 text-lg font-semibold tracking-tight">
                            Discover
                        </h2>
                    </div>
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
                    <div className="space-y-1 w-full flex justify-between items-end">
                        <Button
                            variant="destructive"
                            size="sm"
                            className="justify-center w-1/2"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                        <DarkModeDashboard />
                    </div>
                </div>
            </div>
            <div className="col-span-5 row-span-1 bg-white dark:bg-slate-900 rounded-bl-lg">
                <div className="flex items-center justify-between h-full px-5">
                    <h1>Home</h1>
                    <h1>Berijalan Member of Astra</h1>
                </div>
            </div>
            <div className="col-span-5 row-span-11 bg-white dark:bg-slate-900 rounded-tl-lg overflow-y-scroll">
                {children}
            </div>
        </main>
    )
}