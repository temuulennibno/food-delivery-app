"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "./data";

type Props = {
  active: string;
  onSelect: (id: string) => void;
};

export function CategoryCard({ active, onSelect }: Props) {
  return (
    <section className="flex flex-col gap-4 rounded-xl bg-background p-6">
      <h2 className="text-xl font-semibold leading-7 tracking-tight text-foreground">
        Dishes category
      </h2>
      <div className="flex flex-wrap items-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-secondary-foreground transition",
              active === cat.id
                ? "border-red-500"
                : "border-border hover:border-zinc-300",
            )}
          >
            <span>{cat.label}</span>
            <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold leading-4 text-primary-foreground">
              {cat.count}
            </span>
          </button>
        ))}
        <button
          type="button"
          aria-label="Add category"
          className="inline-flex size-9 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </section>
  );
}
