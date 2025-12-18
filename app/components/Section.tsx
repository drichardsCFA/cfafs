// app/components/Section.tsx
import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-b border-slate-100 ${className || 'bg-white'}`}>
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {children}
      </div>
    </section>
  );
}

// app/components/PageTitle.tsx
export function PageTitle({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          {eyebrow}
        </div>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
