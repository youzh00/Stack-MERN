import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import Pagination from "./Pagination";
import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { DataTableToolbar } from "./DataTableToolBar";

export function DataTable({ columns, data }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div>
        <DataTableToolbar table={table} />
      </div>

      <div className="rounded-full	 border-0 outline-0	">
        <Table className="rounded-full">
          <TableHeader className=" bg-uiGray hover:bg-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="text-tableHeadersTextColor "
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="text-uitextColor hover:bg-gray-100 "
                >
                  {row.getVisibleCells().map((cell) => {
                    let hasMeta = cell.getContext().cell.column.columnDef.meta;
                    return (
                      <TableCell
                        key={cell.id}
                        {...(hasMeta && {
                          ...hasMeta.getCellContext(cell.getContext()),
                        })}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div>
        <Pagination
          previousPage={() => table.previousPage()}
          nextPage={() => table.nextPage()}
          disabledPrevious={!table.getCanPreviousPage()}
          disabledNext={!table.getCanNextPage()}
          pageCount={table.getPageCount()}
          setPageIndex={table.setPageIndex}
        />
      </div>
    </div>
  );
}
