"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { CategoryPills } from "./CategoryPill";
import { ProductCategory } from "../../types/canopies.type";
import { CATEGORIES, PRODUCTS } from "../../data/canopiesData";

export function ProductsSection() {
  const [category, setCategory] = useState<ProductCategory>("Canopies");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"name" | "category">("category");

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sort === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "category") {
      result = [...result].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }

    return result;
  }, [category, search, sort]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">Our Products</h2>
        <CategoryPills
          value={category}
          categories={CATEGORIES}
          onChange={setCategory}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 pr-10 text-sm outline-none placeholder:text-neutral-400 focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            🔍
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-neutral-600">Sort by:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "name" | "category")}
            className="w-40 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]"
          >
            <option value="category">Category</option>
            <option value="name">Name (A–Z)</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-sm text-neutral-500">
            No products found for that search.
          </p>
        )}
      </div>
    </section>
  );
}
