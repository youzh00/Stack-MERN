import Search from "./Search";
import Filter from "./Filter";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export function DataTableToolbar({ table }) {
  const [isFiltered, setIsFiltred] = useState(false);
  return (
    <div className="my-4  flex items-center justify-between">
      <p className=" text-gray-400">Monitor sales and status</p>
      <div className="flex items-center justify-between gap-4">
        <Search
          setFilterValue={table.getColumn("userName")?.setFilterValue}
          inputValue={table.getColumn("userName")?.getFilterValue}
        />
        <div className="flex items-center justify-between gap-2">
          <Filter table={table} setIsFiltred={setIsFiltred} />
          {isFiltered && (
            <button
              type="button"
              onClick={() => {
                setIsFiltred((prev) => !prev);
                table.getColumn("status").setFilterValue();
              }}
              className="inline-flex items-center rounded-md border border-transparent bg-darkGreen px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-950 focus:ring-offset-1"
            >
              <XCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
