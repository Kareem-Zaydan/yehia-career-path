
import Link from "next/link";

export default function PlanPage() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold">
                Yehia's Career Plan
            </h1>

            <p className="mt-4">
                A simple three-step plan to help Yehia
                work toward his career goal.
            </p>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold">
                    1. Prepare
                </h2>
                <p className="mt-2">
                    Get ready for the job market.
                </p>
                <ul className="mt-2 list-disc pl-6">
                    <li>Improve his CV</li>
                    <li>Organize his portfolio projects</li>
                    <li>Choose a target job role</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold">
                    2. Practice
                </h2>
                <p className="mt-2">
                    Build confidence through practice.
                </p>
                <ul className="mt-2 list-disc pl-6">
                    <li>Practice JavaScript and React</li>
                    <li>Build small projects</li>
                    <li>Prepare for technical interviews</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold">
                    3. Apply
                </h2>
                <p className="mt-2">
                    Start applying for suitable opportunities.
                </p>
                <ul className="mt-2 list-disc pl-6">
                    <li>Explore available job opportunities</li>
                    <li>Submit job applications</li>
                    <li>Follow up with companies</li>
                </ul>
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
