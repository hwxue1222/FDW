import type React from "react";
import { cn } from "@/lib/utils";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md";
  }
) {
  const { className, variant = "primary", size = "md", ...rest } = props;
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";
  const sizes = size === "sm" ? "h-8 px-3 text-sm" : "h-10 px-4 text-sm";
  const variants =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : variant === "secondary"
        ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
        : variant === "danger"
          ? "bg-red-600 text-white hover:bg-red-500"
          : "bg-transparent text-neutral-900 hover:bg-neutral-100";

  return <button className={cn(base, sizes, variants, className)} {...rest} />;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2",
        className
      )}
      {...rest}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-200 placeholder:text-neutral-400 focus:ring-2",
        className
      )}
      {...rest}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, ...rest } = props;
  return (
    <select
      className={cn(
        "h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm outline-none ring-neutral-200 focus:ring-2",
        className
      )}
      {...rest}
    />
  );
}

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={cn("rounded-xl border border-neutral-200 bg-white", className)} {...rest} />;
}

export function Badge(
  props: React.HTMLAttributes<HTMLSpanElement> & { tone?: "neutral" | "green" | "amber" | "red" }
) {
  const { className, tone = "neutral", ...rest } = props;
  const tones =
    tone === "green"
      ? "bg-green-50 text-green-700 ring-green-200"
      : tone === "amber"
        ? "bg-amber-50 text-amber-700 ring-amber-200"
        : tone === "red"
          ? "bg-red-50 text-red-700 ring-red-200"
          : "bg-neutral-50 text-neutral-700 ring-neutral-200";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 ring-inset",
        tones,
        className
      )}
      {...rest}
    />
  );
}

export function Field(props: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <label className="block">
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <div className="text-sm font-medium text-neutral-900">{props.label}</div>
        {props.hint ? <div className="text-xs text-neutral-500">{props.hint}</div> : null}
      </div>
      {props.children}
    </label>
  );
}

export function PageShell(props: { title: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xl font-semibold text-neutral-900">{props.title}</div>
        {props.right ? <div className="flex items-center gap-2">{props.right}</div> : null}
      </div>
      {props.children}
    </div>
  );
}
