"use client";

import React, { useState } from "react";

export default function CRMPage() {
    // Lead Data
    const leads = [
        {
            id: 1,
            name: "Sarah Miller",
            role: "VP Sales",
            company: "TechFlow Inc.",
            score: 92,
            status: "Interested",
            lastActive: "2h ago",
            followUp: "Tomorrow",
            tag: "SaaS",
            tagColor: "purple",
            remainder: "Send Contract",
            initials: "SM",
            avatarColor: "bg-blue-600",
            selected: true
        },
        {
            id: 2,
            name: "John Doe",
            role: "Head of Growth",
            company: "Acme Corp",
            score: 85,
            status: "Interested",
            lastActive: "5h ago",
            followUp: "Wed, 2 PM",
            tag: "Ent.",
            tagColor: "blue",
            remainder: "Demo Call",
            initials: "JD",
            avatarColor: "bg-purple-600",
            selected: false
        },
        {
            id: 3,
            name: "David Lee",
            role: "CTO",
            company: "SoftSys",
            score: 60,
            status: "Follow-up",
            lastActive: "1d ago",
            followUp: "Nov 12",
            tag: "Mid-Market",
            tagColor: "slate",
            remainder: "Check Email",
            initials: "DL",
            avatarColor: "bg-amber-600",
            selected: false
        },
        {
            id: 4,
            name: "Emily Chen",
            role: "Founder",
            company: "Innovate",
            score: 45,
            status: "Closed Lost",
            lastActive: "3d ago",
            followUp: "-",
            tag: "Startup",
            tagColor: "rose",
            remainder: "-",
            initials: "EC",
            avatarColor: "bg-slate-600",
            selected: false
        },
        {
            id: 5,
            name: "Mike Jones",
            role: "Director",
            company: "BuildIt",
            score: 98,
            status: "Closed Won",
            lastActive: "4d ago",
            followUp: "-",
            tag: "Cons.",
            tagColor: "emerald",
            remainder: "Onboarding",
            initials: "MJ",
            avatarColor: "bg-emerald-600",
            selected: false
        }
    ];

    return (
        <div className="flex h-full flex-col overflow-hidden bg-background text-muted-foreground transition-colors duration-300">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4 transition-colors duration-300">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="hover:text-foreground cursor-pointer">Home</span>
                    <span>/</span>
                    <span className="text-foreground">CRM Pipeline</span>
                </div>
                <div className="flex gap-4">
                    <button className="relative p-2 text-muted-foreground hover:text-foreground">
                        <BellIcon />
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-background"></span>
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_4px_20px_rgba(37,99,255,0.3)] hover:bg-blue-500">
                        <PlusIcon />
                        New Lead
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6">

                {/* Hero Section */}
                <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 p-8 shadow-2xl">
                    {/* Background Chart Effect */}
                    <div className="absolute bottom-0 right-0 flex items-end gap-2 opacity-20">
                        <div className="h-10 w-4 bg-white rounded-t"></div>
                        <div className="h-16 w-4 bg-white rounded-t"></div>
                        <div className="h-12 w-4 bg-white rounded-t"></div>
                        <div className="h-24 w-4 bg-white rounded-t"></div>
                        <div className="h-20 w-4 bg-white rounded-t"></div>
                        <div className="h-32 w-4 bg-white rounded-t"></div>
                        <div className="h-24 w-4 bg-white rounded-t"></div>
                        <div className="h-12 w-4 bg-white rounded-t"></div>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold text-white mb-6">Q3 Sales Pipeline</h1>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-3xl font-bold text-white">142</div>
                                <div className="text-sm font-medium text-blue-200">Active Leads</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">$1.2M</div>
                                <div className="text-sm font-medium text-blue-200">Potential Value</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">68%</div>
                                <div className="text-sm font-medium text-blue-200">Avg. Lead Score</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                    <TabButton label="All Leads" />
                    <TabButton label="Interested" count={12} active />
                    <TabButton label="Follow-up" count={5} />
                    <TabButton label="Not Interested" />
                    <TabButton label="Closed Won" />
                    <TabButton label="Closed Lost" />
                </div>

                {/* Content Columns */}
                <div className="grid grid-cols-12 gap-6 h-[calc(100vh-350px)]">

                    {/* Left Column: List */}
                    <div className="col-span-8 flex flex-col rounded-xl border border-border bg-card overflow-hidden">
                        {/* Search Bar */}
                        <div className="flex items-center justify-between border-b border-border px-4 py-3">
                            <div className="relative flex-1 max-w-md">
                                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search leads by name, company, or email..."
                                    className="w-full rounded-lg bg-muted/50 py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-500/50"
                                />
                            </div>
                            <button className="ml-4 p-2 text-muted-foreground hover:text-foreground">
                                <FilterIcon />
                            </button>
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-2 border-b border-border bg-muted/30 px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            <div className="col-span-3">Lead Name</div>
                            <div className="col-span-2">Company</div>
                            <div className="col-span-1">Score</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-1">Last Active</div>
                            <div className="col-span-1">Follow Up</div>
                            <div className="col-span-1">Tag</div>
                            <div className="col-span-1">Remainder</div>
                        </div>

                        {/* Table Rows (Scrollable) */}
                        <div className="flex-1 overflow-y-auto divide-y divide-border">
                            {leads.map((lead) => (
                                <LeadRow key={lead.id} {...lead} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between border-t border-border px-6 py-3 text-xs text-muted-foreground">
                            <span>Showing 1-5 of 142 leads</span>
                            <div className="flex gap-2">
                                <button className="rounded bg-muted/50 px-2 py-1 hover:bg-accent hover:text-accent-foreground">Prev</button>
                                <button className="rounded bg-muted/50 px-2 py-1 hover:bg-accent hover:text-accent-foreground">Next</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="col-span-4 flex flex-col rounded-xl border border-border bg-card">
                        {/* Profile Header */}
                        <div className="relative border-b border-border p-6 text-center">
                            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><DotsIcon /></button>
                            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-500/20">SM</div>
                            <h2 className="text-lg font-bold text-foreground">Sarah Miller</h2>
                            <div className="text-sm text-muted-foreground">VP of Sales at <span className="text-blue-500">TechFlow Inc.</span></div>

                            <div className="mt-4 flex justify-center gap-3">
                                <ActionIcon icon={<BriefcaseIcon />} />
                                <ActionIcon icon={<MailIcon />} />
                                <ActionIcon icon={<PhoneIcon />} />
                            </div>

                            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                                <LightningIcon className="h-3 w-3" />
                                High Intent (92/100)
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-border">
                            <div className="flex-1 cursor-pointer border-b-2 border-blue-500 bg-muted/30 py-3 text-center text-sm font-medium text-foreground">Timeline</div>
                            <div className="flex-1 cursor-pointer border-b-2 border-transparent py-3 text-center text-sm font-medium text-muted-foreground hover:text-foreground">Notes</div>
                            <div className="flex-1 cursor-pointer border-b-2 border-transparent py-3 text-center text-sm font-medium text-muted-foreground hover:text-foreground">Files</div>
                        </div>

                        {/* Scrollable Details Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {/* Tags */}
                            <div className="mb-6">
                                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Tags</div>
                                <div className="flex flex-wrap gap-2">
                                    <Tag label="SaaS" color="purple" />
                                    <Tag label="Decision Maker" color="slate" />
                                    <Tag label="Series B" color="blue" />
                                </div>
                            </div>

                            {/* Activity History */}
                            <div>
                                <div className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Activity History</div>
                                <div className="border-l-2 border-border pl-4 space-y-6">
                                    <TimelineItem
                                        color="blue"
                                        date="Today, 10:42 AM"
                                        title="Sarah opened email"
                                        desc='"Q3 Partnership Proposal"'
                                    />
                                    <TimelineItem
                                        color="emerald"
                                        date="Yesterday, 4:15 PM"
                                        title="Status changed to Interested"
                                    />
                                    <TimelineItem
                                        color="amber"
                                        date="Oct 24, 2:00 PM"
                                        title="Call logged"
                                        desc='"Discussed pricing tiers, requested PDF deck"'
                                        sub='"Seems positive about the Pro plan"'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}


/* --- Components --- */

function TabButton({ label, count, active }: any) {
    return (
        <button className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${active ? 'bg-blue-600 text-white' : 'bg-card text-muted-foreground border border-border hover:bg-accent hover:text-accent-foreground'}`}>
            {label}
            {count && <span className={`flex h-5 min-w-[20px] items-center justify-center rounded px-1.5 text-[10px] font-bold ${active ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'}`}>{count}</span>}
        </button>
    )
}

function LeadRow({ name, role, company, score, status, lastActive, followUp, tag, tagColor, remainder, initials, avatarColor, selected }: any) {
    let statusStyle = "bg-slate-500/10 text-slate-400 border border-slate-500/20";
    if (status === "Interested") statusStyle = "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    else if (status === "Follow-up") statusStyle = "bg-amber-500/10 text-amber-400 border border-amber-500/20";
    else if (status === "Closed Won") statusStyle = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
    else if (status === "Closed Lost") statusStyle = "bg-slate-700/30 text-slate-500 border border-slate-700/50";

    const scoreColor = score >= 90 ? 'bg-emerald-500' : score >= 60 ? 'bg-amber-500' : 'bg-rose-500';

    return (
        <div className={`grid grid-cols-12 gap-2 px-6 py-4 items-center cursor-pointer transition hover:bg-muted/50 ${selected ? 'bg-blue-600/[0.05] border-l-2 border-blue-600' : 'border-l-2 border-transparent'}`}>
            <div className="col-span-3 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColor}`}>{initials}</div>
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate">{name}</div>
                    <div className="text-xs text-muted-foreground truncate">{role}</div>
                </div>
            </div>

            <div className="col-span-2 text-sm text-foreground truncate">{company}</div>

            <div className="col-span-1 flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">{score}</span>
                <div className="hidden xl:block h-1.5 w-12 rounded-full bg-muted/50">
                    <div className={`h-full rounded-full ${scoreColor}`} style={{ width: `${score}%` }}></div>
                </div>
            </div>

            <div className="col-span-2">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${statusStyle}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${status === 'Interested' ? 'bg-blue-400' : status === 'Follow-up' ? 'bg-amber-400' : status === 'Closed Won' ? 'bg-emerald-400' : 'bg-slate-500'}`}></span>
                    {status}
                </span>
            </div>

            <div className="col-span-1 text-xs text-muted-foreground">{lastActive}</div>

            <div className="col-span-1 text-xs font-medium text-amber-500">{followUp}</div>

            <div className="col-span-1">
                <Tag label={tag} color={tagColor} />
            </div>

            <div className="col-span-1 text-xs text-muted-foreground truncate" title={remainder}>{remainder}</div>
        </div>
    )
}

function ActionIcon({ icon }: any) {
    return (
        <button className="flex h-8 w-8 items-center justify-center rounded bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
            {icon}
        </button>
    )
}

function Tag({ label, color }: any) {
    let style = "bg-slate-500/10 text-slate-400 border-slate-500/20";
    if (color === 'purple') style = "bg-purple-500/10 text-purple-400 border-purple-500/20";
    if (color === 'blue') style = "bg-blue-500/10 text-blue-400 border-blue-500/20";

    return (
        <span className={`rounded border px-2 py-1 text-[10px] font-semibold ${style}`}>{label}</span>
    )
}

function TimelineItem({ color, date, title, desc, sub }: any) {
    const dotColor = color === 'blue' ? 'bg-blue-500' : color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500';
    return (
        <div className="relative">
            <div className={`absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background ${dotColor}`}></div>
            <div className="text-[10px] text-muted-foreground mb-0.5">{date}</div>
            <div className="text-sm text-foreground leading-snug">
                {title}
                {desc && <span className="text-foreground block font-medium mt-1">{desc}</span>}
                {sub && <span className="text-muted-foreground block text-xs mt-1 italic">{sub}</span>}
            </div>
        </div>
    )
}


/* --- Icons --- */
function BellIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>; }
function PlusIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>; }
function SearchIcon({ className }: { className?: string }) { return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>; }
function FilterIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>; }
function DotsIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>; }
function BriefcaseIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>; }
function MailIcon({ className }: { className?: string }) { return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>; }
function PhoneIcon({ className }: { className?: string }) { return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function LightningIcon({ className }: { className?: string }) { return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>; }
