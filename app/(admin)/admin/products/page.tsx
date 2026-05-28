"use client";

import { useState } from "react";
import { CategoryCard } from "./category-card";
import { ProductSection } from "./product-section";
import { SECTIONS } from "./data";
import { CategoryCreateDialog } from "./category-create-dialog";

export default function AdminProductsPage() {
  const [active, setActive] = useState("all");
  const [isCategoryCreating, setIsCategoryCreating] = useState(false);
  const visible = active === "all" ? SECTIONS : SECTIONS.filter((s) => s.id === active);

  const handleOnCreateCategory = () => {
    setIsCategoryCreating(!isCategoryCreating);
  };

  return (
    <div className="flex flex-col gap-5">
      <CategoryCard active={active} onSelect={setActive} onCreate={handleOnCreateCategory} />
      <div className="flex flex-col gap-5">
        {visible.map((section) => (
          <ProductSection key={section.id} section={section} />
        ))}
      </div>
      <CategoryCreateDialog open={isCategoryCreating} onClose={handleOnCreateCategory} />
    </div>
  );
}
