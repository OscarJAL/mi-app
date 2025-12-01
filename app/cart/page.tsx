"use client";

import { useMemo, useState } from "react";
import { CartItem } from "@/src/components/industries partner/component/cart/CartItem";
import { OrderSummary } from "@/src/components/industries partner/component/cart/OrderSummary";
import { Header } from "@/src/components/industries partner/component/cart/Header";
//import Footer from "@/src/components/industries partner/footer";
import { CheckoutModal, CheckoutStep } from "@/src/components/industries partner/component/cart/CheckoutModal";

export type CartProduct = {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  imageUrl: string;
};

type CartLine = CartProduct & {
  quantity: number;
};

const INITIAL_CART: CartLine[] = [
  {
    id: 1,
    name: "Modulux C6SR00",
    description: "Aluminum canopy 6' profile 1 color, hanger rods, single insulated roof",
    color: "Brown",
    price: 749,
    quantity: 2,
    imageUrl: "/images/canopy-placeholder.png", // reemplaza por tu imagen
  },
  {
    id: 2,
    name: "Modulux C6SR00",
    description: "Aluminum canopy 6' profile 1 color, hanger rods, single insulated roof",
    color: "Brown",
    price: 749,
    quantity: 2,
    imageUrl: "/images/canopy-placeholder.png",
  },
  {
    id: 3,
    name: "Modulux C6SR00",
    description: "Aluminum canopy 6' profile 1 color, hanger rods, single insulated roof",
    color: "Brown",
    price: 749,
    quantity: 2,
    imageUrl: "/images/canopy-placeholder.png",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartLine[]>(INITIAL_CART);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("none");

  const { itemsCount, subtotal, shipping, taxes, couponDiscount, total } =
    useMemo(() => {
      const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const shipping = 56.76; // dummy values
      const taxes = 41.26;
      const couponDiscount = 20;

      const total = subtotal + shipping + taxes - couponDiscount;

      return { itemsCount, subtotal, shipping, taxes, couponDiscount, total };
    }, [cart]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />

      <main className="flex-1">
        {/* TOP spacing + title */}
        <section className="bg-[#f5f5f5] py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-xl font-semibold tracking-wide">
              Shopping Cart
            </h1>
          </div>
        </section>

        {/* CART + SUMMARY */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10">
            <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
              {/* Cart list */}
              <div>
                <h2 className="mb-6 text-lg font-semibold">Cart</h2>

                <div className="space-y-6 border-b border-gray-200 pb-8">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>

                {/* Coupon */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
                  />
                  <button className="rounded-full bg-[#ff5100] px-6 py-2 text-sm font-semibold text-white hover:bg-[#e24600] transition">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* Order summary */}
              <OrderSummary
                itemsCount={itemsCount}
                subtotal={subtotal}
                shipping={shipping}
                taxes={taxes}
                couponDiscount={couponDiscount}
                total={total}
                onCheckout={() => setCheckoutStep("shipping")}
              />
            </div>
          </div>
        </section>

        {/* Orange banner */}
        <section className="bg-transparent">
          <div className="container mx-auto px-4 py-10">
            <div className="rounded-\[24px\] bg-[#ff5100] px-6 py-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-white text-xl font-semibold">
                Got 30 seconds?
              </p>
              <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#ff5100] hover:bg-gray-100 transition">
                Instant Estimate
              </button>
            </div>
          </div>
        </section>
      </main>

      

      {/* Checkout modal (shipping + payment) */}
      <CheckoutModal
        step={checkoutStep}
        onClose={() => setCheckoutStep("none")}
        onShippingCompleted={() => setCheckoutStep("payment")}
        onPaymentCompleted={() => {
          // aquí podrías redirigir o limpiar el carrito
          alert("Order placed successfully (dummy flow).");
          setCheckoutStep("none");
        }}
      />
    </div>
  );
}
