
import Link from "next/link";
import { opportunities } from "../../../data/opportunities";

type Props = {
    params: Promise<{ id: string }>;
};

export function generateStaticParams() {
    return opportunities.map((opportunity) => ({
        id: opportunity.id,
    }));
}

export default async function OpportunityPage({ params }: Props) {
    const { id } = await params;

    const opportunity = opportunities.find(
        (item) => item.id === id
    );

    if (!opportunity) {
        return (
            <main className="mx-auto max-w-4xl px-6 py-12">
                <h1 className="text-3xl font-bold">
                    Opportunity not found
                </h1>
                <p className="mt-4">
                    Sorry, this opportunity does not exist.
                </p>
                <Link href="/opportunities" className="mt-6 inline-block underline">
                    Back to Opportunities
                </Link>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-4xl font-bold">
                {opportunity.title}
            </h1>
            <p className="mt-6">Company: {opportunity.company}</p>
            <p className="mt-2">Location: {opportunity.location}</p>

            <h2 className="mt-8 text-2xl font-semibold">
                Job Description
            </h2>
            <p className="mt-3">{opportunity.description}</p>

            <Link href="/opportunities" className="mt-8 inline-block underline">
                Back to Opportunities
            </Link>
        </main>
    );
}
