"use client";

import { IcarsDetails, car_details } from "@/components/Constants/car-details";
import { Button } from "@/components/UI/Button";
import { add_icon } from "@/components/UI/Icons";
import { Input } from "@/components/UI/Input";
import { Table } from "@/components/UI/Table";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export const columns: ColumnDef<IcarsDetails>[] = [
  {
    accessorKey: "id",
    header: "Car ID",
  },
  {
    accessorKey: "name",
    header: "Make",
  },

  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "mfd",
    header: "Year",
  },
  {
    accessorKey: "price_perday",
    header: "Price Per Day",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price_perday"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Availability Status",
    cell: (info: any) => (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500" />
        Available
      </div>
    ),
  },
];

export const ListOfCars = () => {
  return (
    <section className="mx-auto w-full max-w-7xl p-6 shadow-lg overflow-x-auto ">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">List of Cars</h2>
        </div>
        <div>
          <Button
            className="bg-black"
            label="List a Car"
            type="button"
            icon={add_icon}
          />
        </div>
      </div>
      <div className="sm:w-1/3 w-60">
        <Input
          className="mt-2"
          label=""
          placeholder="Search by Model Name"
          type="text"
        />
      </div>
      <Table columns={columns} data={car_details} />
    </section>
  );
};
