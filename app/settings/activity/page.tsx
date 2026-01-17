"use client";

import { Bell, ChevronDown, Info } from "lucide-react";
import { useState } from "react";

export default function AccountActivityPage() {
    const [dailyCustomMode, setDailyCustomMode] = useState(false);

    // Days state
    const [days, setDays] = useState({
        MONDAY: true,
        TUESDAY: true,
        WEDNESDAY: true,
        THURSDAY: true,
        FRIDAY: true,
        SATURDAY: true,
        SUNDAY: true,
    });

    const toggleDay = (day: keyof typeof days) => {
        setDays(prev => ({ ...prev, [day]: !prev[day] }));
    };

    return (
        <div className="flex h-full flex-col bg-background text-foreground transition-colors duration-300">
            {/* Top Header (Consistent with other pages) */}
            <header className="flex h-16 items-center justify-between border-b border-border bg-card px-8 transition-colors duration-300">
                <div className="flex gap-4"></div>

                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
                        Start a campaign
                    </button>

                    <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5">
                        <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">500 credits</span>
                    </div>

                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Bell size={20} />
                    </button>

                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 ring-2 ring-background">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shubhangi" alt="Avatar" className="h-full w-full rounded-full" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">Shubhangi Gupta</span>
                        <ChevronDown size={14} className="text-muted-foreground" />
                    </div>
                </div>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-background px-8 py-8 transition-colors duration-300">

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-foreground">Account activity</h2>
                        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Currently active</span>
                        </div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Choose when you want your Waalaxy actions to be sent</p>
                </div>

                {/* Main Settings Card */}
                <div className="rounded-2xl border border-border bg-card p-8 transition-colors duration-300">

                    {/* Time Zone */}
                    <div className="mb-8 max-w-md">
                        <label className="mb-3 block text-sm font-bold text-foreground">Select time zone</label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-blue-500/50 transition-colors">
                                <option>Asia/Calcutta (GMT+5:30)</option>
                                <option>America/New_York (GMT-5:00)</option>
                                <option>Europe/London (GMT+0:00)</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                        </div>
                    </div>

                    {/* Working Days Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <label className="text-sm font-bold text-foreground">Select Working days</label>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">Daily custom mode</span>
                            <button
                                onClick={() => setDailyCustomMode(!dailyCustomMode)}
                                className={`relative h-6 w-11 rounded-full transition-colors ${dailyCustomMode ? 'bg-blue-600' : 'bg-muted'}`}
                            >
                                <div className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${dailyCustomMode ? 'left-6' : 'left-1'}`}></div>
                            </button>
                        </div>
                    </div>

                    {/* Working Days Grid */}
                    <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {Object.entries(days).map(([day, isActive]) => (
                            <div key={day} className="flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-colors">
                                <span className="text-xs font-bold text-foreground">{day}</span>
                                <button
                                    onClick={() => toggleDay(day as keyof typeof days)}
                                    className={`relative h-6 w-11 rounded-full transition-colors ${isActive ? 'bg-blue-600' : 'bg-muted'}`}
                                >
                                    <div className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${isActive ? 'left-6' : 'left-1'}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Time Range Slider (Visual Mock) */}
                    <div className="mb-12">
                        <div className="flex justify-between text-xs font-semibold text-blue-500 mb-2">
                            <span>12:00 AM</span>
                            <span>11:59 PM</span>
                        </div>
                        <div className="relative h-2 w-full rounded-full bg-muted">
                            {/* Active Range Bar */}
                            <div className="absolute left-0 right-0 h-full rounded-full bg-blue-500"></div>
                            {/* Knobs */}
                            <div className="absolute left-0 top-1/2 -ml-2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-primary bg-background ring-2 ring-blue-500/30 shadow-sm"></div>
                            <div className="absolute right-0 top-1/2 -mr-2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-primary bg-background ring-2 ring-blue-500/30 shadow-sm"></div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                            <span>12:00 AM</span>
                            <span>11:59 PM</span>
                        </div>
                    </div>

                    {/* Footer Section - Max Daily Quota */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base font-bold text-foreground">Edit your max daily quota</h3>
                                    <Info size={14} className="text-muted-foreground" />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Specific limit : Linkedin allows only 200 invitations max, per week
                                </p>
                            </div>

                            <button className="rounded-xl border border-border bg-secondary/50 px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors">
                                Restore default values
                            </button>
                        </div>

                        {/* Quota Grids */}
                        <div className="space-y-6">
                            {/* LinkedIn Section */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-foreground">LinkedIn</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 rounded-xl border border-border bg-background"></div>
                                    ))}
                                </div>
                            </div>

                            {/* Email Section */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-foreground">Email</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 rounded-xl border border-border bg-background"></div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Call Agent Section */}
                            <div>
                                <label className="mb-3 block text-sm font-bold text-foreground">AI Call Agent</label>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 rounded-xl border border-border bg-background"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
