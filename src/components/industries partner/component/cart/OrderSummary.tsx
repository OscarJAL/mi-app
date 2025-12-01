type Props = {
  itemsCount: number;
  subtotal: number;
  shipping: number;
  taxes: number;
  couponDiscount: number;
  total: number;
  onCheckout: () => void;
};

export const OrderSummary: React.FC<Props> = ({
  itemsCount,
  subtotal,
  shipping,
  taxes,
  couponDiscount,
  total,
  onCheckout,
}) => {
  const format = (n: number) => `$${n.toFixed(2)}`;

  return (
    <aside className="border border-gray-200 bg-[#f8f8f8] p-6 rounded-md">
      <h2 className="mb-6 text-lg font-semibold">Order Summary</h2>

      <dl className="space-y-2 text-sm text-gray-800">
        <div className="flex justify-between">
          <dt>Items</dt>
          <dd>{itemsCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Sub Total</dt>
          <dd className="font-medium">{format(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd>{format(shipping)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Taxes</dt>
          <dd>{format(taxes)}</dd>
        </div>
        <div className="flex justify-between text-[#ff5100]">
          <dt>Coupon Discount</dt>
          <dd>-{format(couponDiscount)}</dd>
        </div>
      </dl>

      <div className="mt-4 border-t border-gray-300 pt-4 flex justify-between text-sm font-semibold">
        <span>Total</span>
        <span>{format(total)}</span>
      </div>

      <button
        onClick={onCheckout}
        className="mt-6 w-full rounded-none bg-black py-2 text-sm font-semibold text-white hover:bg-gray-900 transition"
      >
        Check Out Now!
      </button>
    </aside>
  );
};
