
import Link from "next/link";
import type { ReactNode } from "react";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <nav className="mb-8 flex flex-wrap gap-6 border-b pb-4">
                <Link href="/dashboard" className="underline">
                    Overview
                </Link>
                <Link href="/dashboard/applications" className="underline">
                    Applications
                </Link>
            </nav>

            {children}
        </section>
    );
}
