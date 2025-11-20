import Image from "next/image";
import { Product } from "../../types/canopies.type";


export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-200/60">
      <div className="relative h-44 bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-5">
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-neutral-600">
            {product.description}
          </p>
        </div>

        <div className="mt-1 flex items-center gap-1.5">
          {product.colors.map((c, idx) => (
            <span
              key={idx}
              className="h-3 w-3 rounded-full border border-black/5"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <p className="mt-1 text-[11px] font-medium text-neutral-500">
          {product.startingSize}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">
            {product.priceRange}
          </span>
          <button className="rounded-full bg-[#ff5100] px-5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#e44a00]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
