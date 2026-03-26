import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-pf-bg px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-pf-accent">{"// 404.md"}</p>
        <h1 className="mt-4 text-6xl font-black text-pf-text-watermark">404</h1>
        <div className="mt-6 rounded-lg border border-pf-border bg-pf-surface p-6 text-left font-mono text-sm">
          <p className="text-pf-text-faint">$ cat page.md</p>
          <p className="mt-2 text-pf-text-muted">
            cat: page.md: No such file or directory
          </p>
          <p className="mt-4 text-pf-text-faint">$ ls available/</p>
          <div className="mt-2 space-y-1 text-pf-text-body">
            <p>
              <Link href="/" className="text-pf-accent hover:underline">
                index.md
              </Link>
              {"  — homepage"}
            </p>
            <p>
              <Link href="/blog" className="text-pf-accent hover:underline">
                posts.md
              </Link>
              {"  — blog"}
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-pf-text-subtle">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    </div>
  )
}
