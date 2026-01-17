"use client";

import Link from "next/link";
import { Globe, FileSearch } from "lucide-react";
import { useState } from "react";
import AddLeads from "./social-engagement/AddLeads";

export default function LeadExtractionPage() {
  const [showAddLeads, setShowAddLeads] = useState(false);

  return (
    <div className="relative h-full w-full bg-background text-foreground transition-colors duration-300">
      {showAddLeads && <AddLeads onClose={() => setShowAddLeads(false)} />}

      <div className="h-full w-full overflow-y-auto p-6">

        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground">
          Home <span className="px-1">/</span>{" "}
          <span className="text-blue-500">Lead Extraction</span>
        </div>

        {/* Header */}
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Lead Extraction
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your lead sourcing campaigns and choose your preferred
              extraction methods.
            </p>
          </div>

          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
            <span className="text-lg leading-none">+</span>
            New Campaign
          </button>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <StatCard
            title="Total Leads Extracted"
            value="12,405"
            sub="+12% from last week"
            subColor="text-emerald-500"
            iconRight={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M7 12c2.76 0 5-2.24 5-5S9.76 2 7 2 2 4.24 2 7s2.24 5 5 5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M2 22v-2c0-2.2 1.8-4 4-4h2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M14 22v-2c0-1.8 1.2-3.4 2.9-3.9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          <StatCardProgress
            title="Email Validity Rate"
            value="85%"
            iconRight={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6 9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            progress={85}
          />

          <StatCard
            title="Active Jobs"
            value="4"
            sub="Processing now"
            subColor="text-emerald-400"
            iconRight={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 3v3M17 3v3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M4 7h16v14H4V7Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 12h8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>

        {/* Select Method */}
        <div className="mt-10">
          <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <span className="text-blue-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2v5M12 17v5M2 12h5M17 12h5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M7 7l3 3M14 14l3 3M7 17l3-3M14 10l3-3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Select Extraction Method
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MethodCard
              icon={<ThumbIcon />}
              title="Social Engagement"
              desc="Extract leads interacting with specific influencers or posts. Target likes, comments, and followers."
              buttonText="Start Extraction"
              // href="/dashboard/extraction/social-engagement" 
              onClick={() => setShowAddLeads(true)}
            />

            <MethodCard
              icon={<UsersIcon />}
              title="Groups Scraper"
              desc="Scrape member lists from industry-specific professional groups and communities automatically."
              buttonText="Start Extraction"
              href="/dashboard/extraction/group-engagement"
            />

            <MethodCard
              icon={<Globe size={22} />}
              title="Web Engagement"
              desc="Find leads using boolean search, specific job titles, location data, and industry filters."
              buttonText="Start Extraction"
              href="/dashboard/extraction/lead-sourcing"
            />

            <MethodCard
              icon={<FileSearch size={22} />}
              title="Basic Search & CSV"
              desc="Enrich your existing data. Upload a list of domains or names for deep analysis."
              buttonText="Start Extraction"
              href="/dashboard/extraction/lead-sourcing"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              Recent Activity
            </h2>
            <button className="text-sm font-semibold text-blue-500 hover:text-blue-400">
              View All
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card p-4 transition-colors">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-muted-foreground">
                  <tr className="border-b border-border">
                    <th className="py-3">CAMPAIGN NAME</th>
                    <th className="py-3">METHOD</th>
                    <th className="py-3">DATE</th>
                    <th className="py-3">LEADS FOUND</th>
                    <th className="py-3">STATUS</th>
                  </tr>
                </thead>

                <tbody className="text-foreground/80">
                  <Row
                    name="Q4 SaaS Outreach"
                    method="Web Engagement"
                    date="Oct 24, 2023"
                    leads="450"
                    status="Completed"
                    statusColor="green"
                  />
                  <Row
                    name="Marketing Managers List"
                    method="Groups Scraper"
                    date="Oct 23, 2023"
                    leads="1,200"
                    status="Processing"
                    statusColor="blue"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 backdrop-blur transition-colors hover:border-blue-500/30">
      {children}
    </div>
  );
}

function StatCard({
  title,
  value,
  sub,
  subColor,
  iconRight,
}: {
  title: string;
  value: string;
  sub: string;
  subColor: string;
  iconRight?: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-muted-foreground">{title}</div>
          <div className="mt-2 text-2xl font-semibold text-foreground">
            {value}
          </div>
          <div className={["mt-2 text-xs", subColor].join(" ")}>{sub}</div>
        </div>

        <div className="rounded-xl bg-blue-600/10 p-2 text-blue-500 ring-1 ring-blue-500/15">
          {iconRight}
        </div>
      </div>
    </Card>
  );
}

function StatCardProgress({
  title,
  value,
  progress,
  iconRight,
}: {
  title: string;
  value: string;
  progress: number;
  iconRight?: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-muted-foreground">{title}</div>
          <div className="mt-2 text-2xl font-semibold text-foreground">
            {value}
          </div>
        </div>

        <div className="rounded-xl bg-blue-600/10 p-2 text-blue-500 ring-1 ring-blue-500/15">
          {iconRight}
        </div>
      </div>

      <div className="mt-4 h-2 w-full rounded-full bg-secondary">
        <div
          className="h-2 rounded-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
}

function MethodCard({
  icon,
  title,
  desc,
  buttonText,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-5 backdrop-blur transition-colors hover:border-blue-500/30 hover:bg-accent/50">
      <div className="text-blue-500">{icon}</div>

      <div className="mt-4 text-base font-semibold text-foreground">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{desc}</p>

      {href ? (
        <Link
          href={href}
          className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
        >
          {buttonText}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="mt-5 h-10 w-full rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

function Row({
  name,
  method,
  date,
  leads,
  status,
  statusColor,
}: {
  name: string;
  method: string;
  date: string;
  leads: string;
  status: string;
  statusColor: "green" | "blue";
}) {
  const badge =
    statusColor === "green"
      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
      : "bg-blue-500/10 text-blue-600 border-blue-500/20";

  return (
    <tr className="border-b border-border last:border-b-0 transition-colors hover:bg-muted/50">
      <td className="py-4 font-semibold text-foreground">{name}</td>
      <td className="py-4 text-muted-foreground">{method}</td>
      <td className="py-4 text-muted-foreground">{date}</td>
      <td className="py-4 text-foreground">{leads}</td>
      <td className="py-4">
        <span
          className={[
            "inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
            badge,
          ].join(" ")}
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current opacity-70" />
          {status}
        </span>
      </td>
    </tr>
  );
}

/* ---------------- Icons ---------------- */

function ThumbIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 9V4a2 2 0 0 0-2-2l-4 9v11h10a2 2 0 0 0 2-1.6l1-7A2 2 0 0 0 19 9h-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M7 11H4v11h3V11Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 12c2.2 0 4-1.8 4-4S10.2 4 8 4 4 5.8 4 8s1.8 4 4 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M2 22v-2c0-2 1.6-3.6 3.6-3.6H10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 22v-2c0-1.8 1.2-3.4 2.9-3.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
