"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// Import ModeToggle for theme switching
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: GridIcon },
  {
    label: "Lead Extraction",
    href: "/dashboard/extraction",
    icon: DatabaseIcon,
  },
  { label: "Scoring", href: "/dashboard/scoring", icon: SparkIcon },

  // ✅ NEW: below Scoring
  { label: "Enrichment", href: "/dashboard/enrichment", icon: WandIcon },

  { label: "Campaigns", href: "/dashboard/campaigns", icon: PlayIcon },
  { label: "CRM Integration", href: "/dashboard/crm", icon: PlugIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <aside className="flex h-screen w-[280px] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-colors duration-300">
      {/* Brand */}
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-blue-600/20 ring-1 ring-blue-500/20">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              G
            </div>
            {/* Incomplete Icon on Logo */}
            <div className="absolute right-0 top-0 z-50 grid h-4 w-4 -translate-y-1/3 translate-x-1/3 place-items-center rounded-full bg-amber-500 ring-2 ring-sidebar">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2 text-sm font-semibold text-sidebar-foreground">
              LeadIntel
            </div>
            <div className="text-xs text-muted-foreground">80% Completed</div>
          </div>
        </div>
        <ModeToggle />
      </div>

      {/* Nav */}
      <nav className="px-3">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "mb-1 flex items-center gap-3 rounded-xl px-3 py-2 text-[13px] transition",
                active
                  ? "bg-blue-600 text-white shadow-[0_14px_30px_rgba(37,99,255,0.25)]"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              ].join(" ")}
            >
              <item.icon className={active ? "text-white" : "text-muted-foreground/70"} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Spacer & Centered Organisation Card */}
      <div className="flex flex-1 flex-col justify-center px-4">
        <Link
          href="/dashboard/organisation"
          className="flex items-center gap-3 rounded-2xl border border-sidebar-border bg-sidebar-accent/50 p-2 hover:bg-sidebar-accent transition-colors"
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-purple-500/40 to-pink-400/20 ring-1 ring-sidebar-border">
            <BuildingIcon className="text-sidebar-foreground/80" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[13px] font-semibold text-sidebar-foreground">
              Organisation
            </div>
            <div className="truncate text-[11px] text-muted-foreground">
              Business Name
            </div>
          </div>
          <ChevronDownIcon className="ml-auto text-muted-foreground" />
        </Link>
      </div>

      {/* Bottom area */}
      <div className="p-4 relative">

        {/* ✅ Affiliate / Program (above profile card) */}
        <div className="mb-3 flex flex-col gap-1">
          <Link
            href="/dashboard/pricing"
            className="w-full rounded-lg bg-sidebar-accent/50 px-3 py-2 text-left text-[13px] font-semibold text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            Pricing
          </Link>

          <Link
            href="/dashboard/affiliate-program"
            className="w-full rounded-lg bg-sidebar-accent/50 px-3 py-2 text-left text-[13px] font-semibold text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            Affiliate Program
          </Link>
        </div>

        {/* Profile Menu Popup */}
        {isProfileOpen && (
          <div className="absolute bottom-full left-4 right-4 mb-3 z-50 overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl">
            <div className="mb-2 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">My Companies</div>

            {/* Company 1 */}
            <div className="group flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 transition hover:bg-accent">
              <div className="flex items-center gap-3">
                <div className="grid h-7 w-7 place-items-center rounded bg-blue-600 text-[10px] font-bold text-white">L</div>
                <div className="text-[13px] font-medium text-foreground">LeadIntel</div>
              </div>
              <Link href="/settings" className="grid h-7 w-7 place-items-center rounded text-muted-foreground transition hover:bg-background hover:text-foreground">
                <GearIcon className="scale-90" />
              </Link>
            </div>

            {/* Company 2 */}
            <div className="group flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 transition hover:bg-accent">
              <div className="flex items-center gap-3">
                <div className="grid h-7 w-7 place-items-center rounded bg-purple-600 text-[10px] font-bold text-white">A</div>
                <div className="text-[13px] font-medium text-foreground">Acme Corp</div>
              </div>
              <Link href="/settings" className="grid h-7 w-7 place-items-center rounded text-muted-foreground transition hover:bg-background hover:text-foreground">
                <GearIcon className="scale-90" />
              </Link>
            </div>
          </div>
        )}

        {/* Profile card */}
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex w-full items-center gap-3 rounded-2xl border border-sidebar-border bg-sidebar-accent/50 p-2 text-left transition hover:bg-sidebar-accent"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/20 ring-1 ring-sidebar-border" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-semibold text-sidebar-foreground">
              Alex Morgan
            </div>
            <div className="truncate text-[11px] text-muted-foreground">
              alex@leadintel.io
            </div>
          </div>
          <ChevronUpIcon className={`ml-auto text-muted-foreground transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* ✅ Privacy / Terms (below profile card) */}
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link href="/dashboard/privacy" className="hover:text-sidebar-foreground hover:underline">
            Privacy
          </Link>
          <span className="text-muted-foreground/30">•</span>
          <Link href="/dashboard/terms" className="hover:text-sidebar-foreground hover:underline">
            Term &amp; Condition
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* ------- Icons ------- */
function IconWrap({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={["grid h-5 w-5 place-items-center", className ?? ""].join(" ")}
    >
      {children}
    </span>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    </IconWrap>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 7c0 1.7 2.7 3 6 3s6-1.3 6-3-2.7-3-6-3-6 1.3-6 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M6 7v10c0 1.7 2.7 3 6 3s6-1.3 6-3V7"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M6 12c0 1.7 2.7 3 6 3s6-1.3 6-3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    </IconWrap>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.2 7.3L22 12l-7.8 2.7L12 22l-2.2-7.3L2 12l7.8-2.7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function WandIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 20 20 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 17l-3 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14 4l6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 6l.8-2.2L15 3l-2.2-.8L12 0l-.8 2.2L9 3l2.2.8L12 6Z"
          fill="currentColor"
        />
      </svg>
    </IconWrap>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 5l12 7-12 7V5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function PlugIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3v6M15 3v6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 9h10v3a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 17v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </IconWrap>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.4-2.3.7a8 8 0 0 0-1.7-1L15 6h-6l-.5 2.1a8 8 0 0 0-1.7 1L4.5 8.4l-2 3.4 2 1.2a7.9 7.9 0 0 0 .1 1 7.9 7.9 0 0 0-.1 1l-2 1.2 2 3.4 2.3-.7a8 8 0 0 0 1.7 1L9 22h6l.5-2.1a8 8 0 0 0 1.7-1l2.3.7 2-3.4-2-1.2a7.9 7.9 0 0 0-.1-1Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21h18M5 21V7l8-4 8 4v14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14v-2M8 17v-2M10 14v-2M10 17v-2M14 14v-2M14 17v-2M16 14v-2M16 17v-2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 15l-6-6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}
