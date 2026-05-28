import { AddDishCard } from "./add-dish-card";
import { ProductCard } from "./product-card";
import type { Section } from "./data";

export function ProductSection({ section }: { section: Section }) {
  return (
    <section className="flex flex-col gap-4 rounded-xl bg-background p-5">
      <h3 className="flex items-center gap-2 text-xl font-semibold leading-7 tracking-tight text-foreground">
        <span>{section.title}</span>
        <span>({section.count})</span>
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AddDishCard category={section.title} />
        {section.products.map((product, i) => (
          <ProductCard key={`${section.id}-${i}`} product={product} />
        ))}
      </div>
    </section>
  );
}
