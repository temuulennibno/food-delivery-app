"use client";

import { useState } from "react";
import { CategoryCard } from "./category-card";
import { ProductSection } from "./product-section";
import { SECTIONS } from "./data";

export default function AdminProductsPage() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? SECTIONS : SECTIONS.filter((s) => s.id === active);

  return (
    <div className="flex flex-col gap-5">
      <CategoryCard active={active} onSelect={setActive} />
      <div className="flex flex-col gap-5">
        {visible.map((section) => (
          <ProductSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
