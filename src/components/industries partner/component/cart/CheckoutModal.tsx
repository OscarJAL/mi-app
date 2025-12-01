"use client";

import { FormEvent, useState } from "react";

export type CheckoutStep = "none" | "shipping" | "payment";

type Props = {
  step: CheckoutStep;
  onClose: () => void;
  onShippingCompleted: () => void;
  onPaymentCompleted: () => void;
};

type ShippingForm = {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
};

type PaymentForm = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

export const CheckoutModal: React.FC<Props> = ({
  step,
  onClose,
  onShippingCompleted,
  onPaymentCompleted,
}) => {
  const [shipping, setShipping] = useState<ShippingForm>({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
  });

  const [payment, setPayment] = useState<PaymentForm>({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  if (step === "none") return null;

  const handleShippingSubmit = (e: FormEvent) => {
    e.preventDefault();
    // podrías validar aquí
    console.log("Shipping data", shipping);
    onShippingCompleted();
  };

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Payment data", payment);
    onPaymentCompleted();
  };

  const isShippingStep = step === "shipping";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {isShippingStep ? "Shipping Address" : "Payment Details"}
          </h2>
          <button
            className="text-gray-500 hover:text-black"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {isShippingStep ? (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Full Name
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={shipping.fullName}
                  onChange={(e) =>
                    setShipping((s) => ({ ...s, fullName: e.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Address
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={shipping.address}
                  onChange={(e) =>
                    setShipping((s) => ({ ...s, address: e.target.value }))
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    City
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={shipping.city}
                    onChange={(e) =>
                      setShipping((s) => ({ ...s, city: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    State / Province
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={shipping.state}
                    onChange={(e) =>
                      setShipping((s) => ({ ...s, state: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={shipping.zip}
                    onChange={(e) =>
                      setShipping((s) => ({ ...s, zip: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Country
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={shipping.country}
                    onChange={(e) =>
                      setShipping((s) => ({ ...s, country: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={shipping.email}
                  onChange={(e) =>
                    setShipping((s) => ({ ...s, email: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            <div className="grid gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Name on Card
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={payment.cardName}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, cardName: e.target.value }))
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Card Number
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={payment.cardNumber}
                  onChange={(e) =>
                    setPayment((p) => ({ ...p, cardNumber: e.target.value }))
                  }
                  required
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Expiration (MM/YY)
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={payment.expiry}
                    onChange={(e) =>
                      setPayment((p) => ({ ...p, expiry: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    CVV
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={payment.cvv}
                    onChange={(e) =>
                      setPayment((p) => ({ ...p, cvv: e.target.value }))
                    }
                    required
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#ff5100] px-4 py-2 text-sm font-semibold text-white hover:bg-[#e24600]"
              >
                Place Order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
