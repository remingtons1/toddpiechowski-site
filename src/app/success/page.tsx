import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-100">
      <div className="max-w-xl text-center">
        <div className="mb-6 text-6xl">🎉</div>
        <h1 className="mb-4 text-4xl font-bold">You're In!</h1>
        <p className="mb-6 text-lg text-zinc-400">
          Payment confirmed. I'll reach out within 24 hours to schedule your
          strategy call and get the details I need for your playbook.
        </p>
        <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-left">
          <h2 className="mb-4 font-semibold">What happens next:</h2>
          <ol className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="font-semibold text-emerald-400">1.</span>
              <span>You'll get an email from me within 24 hours</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-emerald-400">2.</span>
              <span>We'll schedule your 60-minute strategy call</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-emerald-400">3.</span>
              <span>I'll start your brand audit immediately</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-emerald-400">4.</span>
              <span>Your complete playbook delivered within 2 weeks</span>
            </li>
          </ol>
        </div>
        <p className="mb-8 text-sm text-zinc-500">
          Questions? Email me at{" "}
          <a
            href="mailto:todd@toddpiechowski.com"
            className="text-emerald-400 hover:underline"
          >
            todd@toddpiechowski.com
          </a>
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
