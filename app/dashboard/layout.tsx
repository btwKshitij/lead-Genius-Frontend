import Sidebar from "@/components/Sidebar";
import PageOrganisationIcon from "@/components/PageOrganisationIcon";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full bg-background transition-colors duration-300">
            <Sidebar />
            <main className="flex-1 h-full overflow-hidden relative">
                {children}

                <PageOrganisationIcon />
            </main>
        </div>
    );
}
