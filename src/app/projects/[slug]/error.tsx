"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Project page error:", error);
  }, [error]);

  return (
    <main className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center">
        <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
        <p className="text-muted mb-8">
          Failed to load this project. This could be a temporary issue with the
          GitHub API.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
