import { ProductCategory } from "../../types/canopies.type";


type Props = {
  value: ProductCategory;
  categories: ProductCategory[];
  onChange: (v: ProductCategory) => void;
};

export function CategoryPills({ value, categories, onChange }: Props) {
  return (
    <div className="inline-flex gap-4 rounded-full bg-neutral-100 px-3 py-2">
      {categories.map((cat) => {
        const active = cat === value;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-[#ff5100] text-white shadow-sm"
                : "text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
