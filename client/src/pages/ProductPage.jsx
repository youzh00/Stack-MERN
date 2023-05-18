import { useForm } from "react-hook-form";
import SelectInput from "../components/SelectInput";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  return (
    <div className="flex min-h-screen items-center justify-center gap-8 bg-white">
      <div>
        <img src="/assets/chair.png" alt="" className="h-72 w-72" />
      </div>
      <div className="max-w-sm flex-1 ">
        {!isLoading && (
          <form className="space-y-6">
            <SelectInput products={data?.products || []} />

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
                    placeholder="0.00"
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
                    readOnly
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0.00"
                    aria-describedby="price-currency"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="price"
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
                    readOnly
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="0.00"
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
                  <input
                    type="text"
                    placeholder="EX: 1234 Main St"
                    name="address"
                    id="address"
                    className="block w-full rounded-md border-gray-300  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
