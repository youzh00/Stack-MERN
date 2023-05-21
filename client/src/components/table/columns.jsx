export const columns = [
  {
    accessorKey: "userName",
    header: "Name",
    meta: {
      getCellContext: () => {
        return {
          className: " flex font-semibold	 text-sm ",
        };
      },
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: "equalsString",
    meta: {
      getCellContext: (context) => {
        // console.log("Inside columns ");
        // console.log(context.cell.getValue());
        if (
          context.cell.getValue() === "pending" ||
          context.cell.getValue() === "Pending"
        ) {
          return {
            className:
              " inline-block	 rounded-md  bg-pendingBg px-2.5 py-1  text-sm font-normal text-pendingText",
          };
        } else if (
          context.cell.getValue() === "verified" ||
          context.cell.getValue() === "Verified"
        ) {
          return {
            className:
              " inline-block	 rounded-md  bg-verifiedBg px-2.5 py-1 text-sm font-normal text-verifiedText",
          };
        } else {
          return {
            className:
              " inline-block	 rounded-md   px-2.5 py-0.5 text-sm font-normal text-unverifiedText",
          };
        }
      },
      // className:
      //   "inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800",
    },
  },
  {
    accessorKey: "unityPrice",
    header: "Unity Price",
    cell: ({ row }) => {
      const unityPrice = parseFloat(row.getValue("unityPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(unityPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => {
      const totalPrice = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(totalPrice);

      return <div>{formatted}</div>;
    },
  },
];
