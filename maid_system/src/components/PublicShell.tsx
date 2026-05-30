import type React from "react";
import { cn } from "@/lib/utils";

export default function PublicShell(props: {
  title: string;
  right?: React.ReactNode;
  embed?: boolean;
  children: React.ReactNode;
}) {
  const { embed = false } = props;
  return (
    <div className={cn(embed ? "w-full" : "mx-auto w-full max-w-5xl", embed ? "px-3 py-3" : "px-4 py-6")}>
      <div className={cn("mb-5 flex flex-wrap items-center justify-between gap-3", embed ? "mb-4" : "mb-5")}>
        <div className={cn("font-semibold text-neutral-900", embed ? "text-lg" : "text-xl")}>{props.title}</div>
        {props.right ? <div className="flex items-center gap-2">{props.right}</div> : null}
      </div>
      {props.children}
    </div>
  );
}
