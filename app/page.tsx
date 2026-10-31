
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        Yehia's Career Path
      </h1>

      <p className="mt-4">
        Yehia is a Computer Science graduate from the
        Lebanese University. His goal is to find a job
        within two months.
      </p>

      <p className="mt-4">
        This website helps Yehia organize his career plan,
        explore opportunities, and track his progress.
      </p>

      <nav className="mt-8 flex gap-4">
        <Link href="/plan" className="text-blue-600 underline">
          View Career Plan
        </Link>

        <Link href="/opportunities" className="text-blue-600 underline">
          Explore Opportunities
        </Link>
      </nav>
    </main>
  );
}
