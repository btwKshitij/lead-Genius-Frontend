"use client";

import Sidebar from "@/components/Sidebar";
import PageOrganisationIcon from "@/components/PageOrganisationIcon";
import { ProtectedRoute } from "@/components/ProtectedRoute";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className="flex h-screen w-full bg-background transition-colors duration-300">
                <Sidebar />
                <main className="flex-1 h-full overflow-hidden relative">
                    {children}

                    <PageOrganisationIcon />
                </main>
            </div>
        </ProtectedRoute>
    );
}
