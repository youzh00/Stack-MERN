import React, { useState } from "react";
import { DataTable } from "../components/table/DataTable";
import { columns } from "../components/table/columns";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";

const stats = [
  { name: "Total sales", stat: "30,000" },
  { name: "Pending orders", stat: "250" },
  { name: "Revenue generated", stat: "$80,000" },
];

async function getAllOrders() {
  const { data } = await axios.get("http://localhost:5000/api/orders");
  return data.orders;
}
const OrdersPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
  let [color, setColor] = useState("#314D3E");

  const stats = [
    { name: "Total sales", stat: "30,000" },
    { name: "Pending orders", stat: "250" },
    { name: "Revenue generated", stat: "$80,000" },
  ];
  return (
    <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Last 30 days
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-lg bg-[url('/assets/background.png')] bg-contain bg-no-repeat px-4 py-5 text-white shadow sm:p-6"
              >
                <dt className="mb-1 text-3xl font-semibold tracking-tight ">
                  {item.stat}
                </dt>
                <dd className="truncate text-sm font-normal">{item.name}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-4">
          <h1 className="text-lg">All Orders</h1>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <ClipLoader
              color={color}
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div>
            <DataTable columns={columns} data={data} />
          </div>
        )}
        {/* table */}
      </div>
    </div>
  );
};

export default OrdersPage;
