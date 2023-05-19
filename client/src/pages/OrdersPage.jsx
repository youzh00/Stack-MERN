import React from "react";
import { DataTable } from "../components/table/DataTable";
import { columns } from "../components/table/columns";

const stats = [
  { name: "Total sales", stat: "30,000" },
  { name: "Pending orders", stat: "250" },
  { name: "Revenue generated", stat: "$80,000" },
];

const data = [
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee07c880a233a856b461",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    totalPrice: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Verified",
    createdAt: "2023-05-18T09:21:11.863Z",
    updatedAt: "2023-05-18T09:21:11.863Z",
    __v: 0,
  },
  {
    _id: "6465ee0dc880a233a856b464",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    total: 80,

    product: "6465e887cbc34f8354380adc",
    status: "Pending",
    createdAt: "2023-05-18T09:21:17.119Z",
    updatedAt: "2023-05-18T09:21:17.119Z",
    __v: 0,
  },
  {
    _id: "6465ee17c880a233a856b467",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "Pending",
    createdAt: "2023-05-18T09:21:27.601Z",
    updatedAt: "2023-05-18T09:21:27.601Z",
    __v: 0,
  },
  {
    _id: "6465ee35c064d004c01e9431",
    userName: "Youssef Zahi",
    phone: "+212633186193",
    unityPrice: 20,
    quantity: 4,
    product: "6465e887cbc34f8354380adc",
    status: "Unverified",
    createdAt: "2023-05-18T09:21:57.902Z",
    updatedAt: "2023-05-18T09:21:57.902Z",
    __v: 0,
  },
  {
    _id: "64664848869e5a2feb02098a",
    userName: "Hassan Al Meftah",
    phone: "0644679856",
    unityPrice: 200,
    quantity: 3,
    product: "64663e3a869e5a2feb020937",
    status: "Pending",
    createdAt: "2023-05-18T15:46:16.093Z",
    updatedAt: "2023-05-18T15:46:16.093Z",
    __v: 0,
  },
];

const OrdersPage = () => {
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
                className="li bg-gradient- px overflow-hidden rounded-lg to-[#7a643c] to-50%  px-4 py-5 shadow sm:p-6"
              >
                <dt className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                  {item.stat}
                </dt>
                <dd className="truncate text-sm font-medium text-gray-500">
                  {item.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-4">
          <h1 className="text-lg">All Orders</h1>
        </div>
        <div className="mt-4  flex items-center justify-between">
          <div>
            <p className="mb-3 text-gray-400">Monitor sales and status</p>

            <div></div>
          </div>
          {/* Search */}
          <div></div>
        </div>
        {/* table */}
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
