export default function ProjectLoading() {
  return (
    <main className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto animate-pulse">
        {/* Back link skeleton */}
        <div className="h-4 w-24 bg-surface rounded mb-8" />

        {/* Title skeleton */}
        <div className="mb-12">
          <div className="h-12 w-3/4 bg-surface rounded-lg mb-4" />
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-surface rounded" />
            <div className="h-4 w-5/6 bg-surface rounded" />
            <div className="h-4 w-2/3 bg-surface rounded" />
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-32 bg-surface rounded-full" />
            <div className="h-10 w-28 bg-surface rounded-full" />
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="grid gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-2xl p-6"
            >
              <div className="h-3 w-20 bg-white/5 rounded mb-3" />
              <div className="h-4 w-full bg-white/5 rounded mb-2" />
              <div className="h-4 w-3/4 bg-white/5 rounded" />
            </div>
          ))}
        </div>

        {/* Tech stack skeleton */}
        <div>
          <div className="h-3 w-20 bg-surface rounded mb-4" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-20 bg-surface border border-border rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
