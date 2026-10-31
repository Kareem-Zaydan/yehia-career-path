
import { applications } from "../../../data/applications";

export default function ApplicationsPage() {
    return (
        <main>
            <h1 className="text-4xl font-bold">My Applications</h1>

            <p className="mt-4">
                Keep track of the opportunities Yehia has applied for.
            </p>

            <div className="mt-8 grid gap-4">
                {applications.map((application) => (
                    <article
                        key={application.id}
                        className="rounded-xl border p-6"
                    >
                        <h2 className="text-2xl font-semibold">
                            {application.title}
                        </h2>

                        <p className="mt-3">
                            Company: {application.company}
                        </p>

                        <p className="mt-2">
                            Status: {application.status}
                        </p>
                    </article>
                ))}
            </div>
        </main>
    );
}
