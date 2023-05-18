import SelectInput from "../components/SelectInput";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

async function getProducts() {
  const { data: products } = await axios.get(
    "http://localhost:5000/api/products"
  );
  return products;
}

export default function ProductPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [selected, setSelected] = useState(data?.products[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelected(data?.products[0]);
  }, [isLoading]);

  return (
    <div className="flex min-h-screen items-center justify-center gap-8 bg-white">
      {!isLoading && (
        <>
          <div>
            <img
              src={`/assets/${selected?.image}`}
              alt="product image"
              className="h-72 w-72"
            />
          </div>
          <div className="max-w-sm flex-1 ">
            <form className="space-y-6">
              <SelectInput
                products={data?.products || []}
                selected={selected}
                setSelected={setSelected}
              />

              <div className=" flex gap-4">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={quantity}
                      min={1}
                      onChange={(e) => setQuantity(e.target.value)}
                      aria-describedby="quantity-currency"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Unity Price
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                      readOnly
                      value={selected?.unityPrice || 0}
                      aria-describedby="price-currency"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="totalPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Price
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="totalPrice"
                      className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                      readOnly
                      value={selected?.unityPrice * quantity || 0}
                      aria-describedby="price-currency"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      placeholder="EX: Sara Lamoudi"
                      name="name"
                      required
                      id="name"
                      className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      placeholder="EX: 0689021736"
                      name="phone"
                      required
                      id="phone"
                      className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <textarea
                      type="text"
                      placeholder="EX: 1234 Main St"
                      name="address"
                      id="address"
                      required
                      className="block w-full resize-none rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-end">
                <button
                  type="submit"
                  className="focus:ring-green- inline-flex items-center rounded-md border border-transparent bg-darkGreen px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-green-800 focus:outline-none  focus:ring-offset-2"
                >
                  Validate
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
