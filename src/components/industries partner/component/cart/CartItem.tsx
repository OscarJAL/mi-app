import { CartLine } from "../../types/cart";


type Props = {
  item: CartLine;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export const CartItem: React.FC<Props> = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  const handleChange = (delta: number) => {
    onQuantityChange(item.id, item.quantity + delta);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4">
        <div className="h-20 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
          {/* Reemplaza por <Image ... /> si quieres */}
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-1 text-sm">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">Color: {item.color}</p>
          <p className="font-semibold">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
          <button
            className="px-1 text-lg"
            onClick={() => handleChange(-1)}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="mx-3 text-sm">{item.quantity}</span>
          <button
            className="px-1 text-lg"
            onClick={() => handleChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Remove */}
        <button
          className="text-xs text-gray-600 hover:text-black"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
