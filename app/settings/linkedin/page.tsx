
import { Bell, ChevronDown, Linkedin, Lock } from "lucide-react";

export default function LinkedInSettingsPage() {
    return (
        <div className="flex h-full flex-col bg-background text-foreground transition-colors duration-300">
            {/* Top Header */}
            <header className="flex h-16 items-center justify-between border-b border-border bg-card px-8 transition-colors duration-300">
                <div className="flex gap-4">
                    {/* Placeholder for left side actions if any, image showed empty left side in header mostly */}
                </div>

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
                <h2 className="mb-8 text-2xl font-bold text-foreground">LinkedIn Account</h2>

                {/* LinkedIn Credentials Card */}
                <div className="mb-6 rounded-2xl border border-border bg-card p-8 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="grid h-8 w-8 place-items-center rounded bg-[#0077b5] text-white">
                            <Linkedin size={18} fill="currentColor" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">LinkedIn credentials</h3>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 p-[2px]">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Shubhangi" alt="Avatar" className="h-full w-full rounded-full bg-white" />
                            </div>
                            <span className="font-semibold text-foreground">Shubhangi Gupta</span>
                        </div>
                        <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            Connected
                        </div>
                    </div>
                </div>

                {/* Security Card */}
                <div className="rounded-2xl border border-border bg-card p-8 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 place-items-center rounded bg-[#00cfa6] text-white">
                                <Lock size={18} />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">Securely automate LinkedIn with Waalaxy + 2FA</h3>
                        </div>
                        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-blue-500 hover:text-blue-400 hover:underline">
                            <span className="text-lg">↗</span> Learn more
                        </a>
                    </div>

                    <div className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            Waalaxy connects to your LinkedIn account via a Chrome extension. Once installed, it allows the tool to
                            <strong className="text-foreground"> interact</strong> with your LinkedIn profile.
                        </p>
                        <p>
                            This synchronisation allows your campaigns to run without needing to keep a <strong className="text-foreground">LinkedIn tab open</strong>, and even better, even when your computer is <strong className="text-foreground">turned off!</strong>
                        </p>
                        <p>
                            Two-factor authentication (2FA) is an <strong className="text-foreground">additional security method</strong> to protect your LinkedIn account. Enabling 2FA makes your account more secure and reduces the risk of <strong className="text-foreground">temporary suspension</strong> by LinkedIn.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
