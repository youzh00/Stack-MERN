/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";

const statuses = [
  {
    status: "pending",
  },
  {
    status: "verified",
  },
  {
    status: "unverified",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filter({ table, setIsFiltred }) {
  return (
    <Popover className="relative ">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? "font-medium text-gray-900"
                : "font-normal text-filterTextColor",
              " flex h-[38px] w-[100px] items-center rounded-md border border-gray-300  bg-white text-base  hover:text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            )}
          >
            <FunnelIcon className="mx-2 h-5 w-5" />
            <span>Filter</span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 mt-3  max-w-sm -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white  sm:gap-2 sm:p-2">
                  {statuses.map((item) => (
                    <button
                      key={item.status}
                      onClick={() => {
                        setIsFiltred(true);
                        table.getColumn("status")?.setFilterValue(item.status);
                      }}
                      className=" flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-200"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.status}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
