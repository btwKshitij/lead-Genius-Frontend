"use client";

import React from "react";
import {
  Database,
  FileCheck,
  Rocket,
  MessageSquare,
  AlertCircle,
  Search,
  Calendar,
  CloudLightning,
  CheckCircle2,
  MousePointerClick,
  MoreVertical
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// --- Mock Data ---

const stats = [
  {
    title: "TOTAL EXTRACTED",
    value: "12,450",
    change: "12% vs last week",
    trend: "up",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    changeColor: "text-emerald-500"
  },
  {
    title: "QUALIFIED LEADS",
    value: "845",
    change: "5% High Intent",
    trend: "up",
    icon: FileCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    changeColor: "text-emerald-500"
  },
  {
    title: "ACTIVE CAMPAIGNS",
    value: "12",
    change: "Running smoothly",
    trend: "neutral",
    icon: Rocket,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    changeColor: "text-slate-400"
  },
  {
    title: "RESPONSES",
    value: "342",
    change: "4.2% Rate",
    trend: "up",
    icon: MessageSquare,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    changeColor: "text-emerald-500"
  },
  {
    title: "PENDING TASKS",
    value: "8",
    change: "2 Urgent items",
    trend: "down",
    icon: AlertCircle,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    changeColor: "text-amber-500"
  },
];

const leadQualityData = [
  { name: 'Cold', value: 30, color: '#0ea5e9' }, // Sky blue (customized to match image feel)
  { name: 'Warm', value: 45, color: '#3b82f6' }, // Blue
  { name: 'Hot', value: 25, color: '#10b981' }, // Emerald
];

const outreachData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 25 },
  { day: 'Wed', value: 65 },
  { day: 'Thu', value: 35 },
  { day: 'Fri', value: 35 },
  { day: 'Sat', value: 30 },
];

const recentActivity = [
  {
    id: 1,
    name: "Jane Doe",
    sub: "Acme Corp",
    avatar: "https://i.pravatar.cc/150?u=1",
    type: "user",
    action: "Replied to",
    target: "\"Intro Sequence\"",
    status: "Interested",
    statusColor: "emerald",
    date: "Just now"
  },
  {
    id: 2,
    name: "LinkedIn Extraction",
    sub: "Source: Sales Nav",
    initials: "LI",
    type: "app",
    appColor: "bg-blue-600",
    action: "50 new leads enriched",
    status: "Completed",
    statusColor: "blue",
    date: "2 mins ago"
  },
  {
    id: 3,
    name: "HubSpot Sync",
    sub: "Weekly Batch",
    initials: "CRM",
    type: "app",
    appColor: "bg-purple-600",
    action: "Syncing new contacts",
    status: "Pending",
    statusColor: "amber",
    date: "15 mins ago"
  },
  {
    id: 4,
    name: "Michael Scott",
    sub: "Dunder Mifflin",
    avatar: "https://i.pravatar.cc/150?u=4",
    type: "user",
    action: "Opened email",
    target: "\"Demo Request\"",
    status: "Active",
    statusColor: "blue",
    date: "1 hour ago"
  }
];

import { ProfileCompletionModal } from "@/components/dashboard/ProfileCompletionModal";

export default function DashboardPage() {
  return (
    <div className="h-full w-full overflow-y-auto bg-background p-6 text-foreground font-sans transition-colors duration-300">
      <ProfileCompletionModal />
      {/* --- Header --- */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Alex</h1>
          <p className="text-sm text-muted-foreground">Here is your pipeline health check for the last 7 days.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search leads..."
              className="h-10 rounded-lg border border-input bg-card/50 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-input bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <Calendar className="h-4 w-4" />
            Last 7 Days
          </button>
        </div>
      </div>

      {/* --- Stats Row --- */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-blue-500/50">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{stat.title}</span>
              <div className={`rounded-full p-2 ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <div className="mb-1 text-2xl font-bold text-card-foreground">{stat.value}</div>
            <div className={`text-xs font-medium ${stat.changeColor} flex items-center gap-1`}>
              {stat.trend === 'up' && <span className="inline-block -rotate-45">➜</span>}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* --- Main Grid --- */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12">

        {/* Quick Actions (Left Col) */}
        <div className="flex flex-col gap-4 lg:col-span-3">
          <h3 className="text-sm font-bold text-foreground">Quick Actions</h3>

          <ActionCard
            icon={<CloudLightning className="h-5 w-5 text-white" />}
            iconBg="bg-blue-600"
            title="Start Extraction"
            desc="Import list or scrape URL to find prospects."
            action=">"
            active
          />

          <ActionCard
            icon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />}
            iconBg="bg-emerald-500/10"
            title="View Scored Leads"
            desc="Review 845 high-intent leads pending."
            action=">"
          />

          <ActionCard
            icon={<Rocket className="h-5 w-5 text-purple-500" />}
            iconBg="bg-purple-500/10"
            title="Launch Campaign"
            desc="Select template and target audience."
            action=">"
          />
        </div>

        {/* Lead Quality Distribution (Center Col) */}
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-4">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-card-foreground">Performance Analytics</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Lead Quality Distribution</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">•••</button>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative h-48 w-48 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadQualityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {leadQualityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-card-foreground">12.4k</span>
                <span className="text-[10px] text-muted-foreground">Total Leads</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <LegendItem label="Hot (25%)" sub="Highly Qualified" color="bg-emerald-500" />
              <LegendItem label="Warm (45%)" sub="Engagement detected" color="bg-blue-500" />
              <LegendItem label="Cold (30%)" sub="No activity" color="bg-sky-500" />
            </div>
          </div>
        </div>

        {/* Outreach Performance (Right Col) */}
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-5">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-bold text-card-foreground">Outreach Performance</h3>
            <span className="text-xs text-muted-foreground">Last 30 Days</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={outreachData} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150,150,150,0.1)" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(150,150,150,0.05)' }}
                  contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', color: 'var(--popover-foreground)' }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Recent Activity Table --- */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Recent Pipeline Activity</h2>
        <button className="text-sm font-medium text-blue-500 hover:text-blue-400">View All</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 border-b border-border bg-muted/50 px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <div className="col-span-4">Lead / Campaign</div>
          <div className="col-span-4">Action</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-border">
          {recentActivity.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center transition hover:bg-muted/50">
              <div className="col-span-4 flex items-center gap-3">
                {item.type === 'user' ? (
                  <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full border border-border" />
                ) : (
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-white ${item.appColor}`}>
                    {item.initials}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-card-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>

              <div className="col-span-4 text-sm text-foreground/80">
                {item.action} {item.target && <span className="text-blue-400 font-medium">{item.target}</span>}
              </div>

              <div className="col-span-2">
                <StatusBadge status={item.status} color={item.statusColor} />
              </div>

              <div className="col-span-1 text-sm text-muted-foreground">
                {item.date}
              </div>

              <div className="col-span-1 flex justify-end">
                <button className="text-muted-foreground hover:text-foreground"><MoreVertical size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// --- Components ---

function ActionCard({ icon, iconBg, title, desc, action, active }: any) {
  return (
    <div className={`group cursor-pointer rounded-xl border p-4 transition-all ${active
      ? 'border-blue-600 bg-blue-600 border-none'
      : 'border-border bg-card hover:border-blue-500/30 hover:bg-accent'
      }`}>
      <div className="flex items-start gap-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${active ? 'bg-white/20' : iconBg}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className={`text-sm font-bold ${active ? 'text-white' : 'text-card-foreground'}`}>{title}</h4>
          <p className={`mt-1 text-xs ${active ? 'text-blue-100' : 'text-muted-foreground'}`}>{desc}</p>
        </div>
        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${active ? 'bg-white/20 text-white' : 'text-muted-foreground/50'}`}>
          <span className="text-xs">›</span>
        </div>
      </div>
    </div>
  )
}

function LegendItem({ label, sub, color }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className={`mt-1.5 h-2 w-2 rounded-full ${color}`} />
      <div>
        <div className="text-xs font-bold text-card-foreground">{label}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  )
}

function StatusBadge({ status, color }: any) {
  let styles = "bg-slate-500/10 text-slate-500";
  if (color === 'emerald') styles = "bg-emerald-500/10 text-emerald-600";
  if (color === 'blue') styles = "bg-blue-500/10 text-blue-600";
  if (color === 'amber') styles = "bg-amber-500/10 text-amber-600";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles}`}>
      <span className={`h-1.5 w-1.5 rounded-full bg-current`}></span>
      {status}
    </span>
  )
}
