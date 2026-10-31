
import Link from "next/link";
import { applications } from "../../data/applications";

export default function DashboardPage() {
    return (
        <main>
            <h1 className="text-4xl font-bold">Career Dashboard</h1>

            <p className="mt-4">
                Track Yehia&apos;s progress toward his career goal.
            </p>

            <div className="mt-8 rounded-xl border p-6">
                <h2 className="text-2xl font-semibold">
                    Total Applications
                </h2>

                <p className="mt-4 text-5xl font-bold">
                    {applications.length}
                </p>

                <p className="mt-4">
                    Every application is another step toward Yehia&apos;s goal.
                    Keep moving forward!
                </p>
            </div>

            <Link
                href="/dashboard/applications"
                className="mt-8 inline-block underline"
            >
                View Applications
            </Link>
        </main>
    );
}
