
import Link from "next/link";
import { opportunities } from "../../data/opportunities";

export default function OpportunitiesPage() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold">
                Job Opportunities
            </h1>

            <p className="mt-4">
                Explore opportunities that match Yehia's career goals.
            </p>

            <section className="mt-8 grid gap-6">
                {opportunities.map((opportunity) => (
                    <article
                        key={opportunity.id}
                        className="rounded-lg border p-6"
                    >
                        <h2 className="text-2xl font-semibold">
                            {opportunity.title}
                        </h2>

                        <p className="mt-2">
                            Company: {opportunity.company}
                        </p>

                        <p className="mt-2">
                            Location: {opportunity.location}
                        </p>

                        <Link
                            href={`/opportunities/${opportunity.id}`}
                            className="mt-4 inline-block text-blue-600 underline"
                        >
                            View Opportunity
                        </Link>
                    </article>
                ))}
            </section>

            <Link
                href="/"
                className="mt-8 inline-block text-blue-600 underline"
            >
                Back to Home
            </Link>
        </main>
    );
}

