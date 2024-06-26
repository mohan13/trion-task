import { Card } from "@/components/UI/Card";
import React from "react";

export const Bookings = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 shadow-lg">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Bookings</h2>
          <p className="mt-1 text-sm text-gray-700 flex ">
            <button
              type="button"
              className="inline-flex items-center rounded-l-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
            >
              Ongoing
            </button>

            <div className="inline-flex border border-gray-200 items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-500 hover:bg-black/80 hover:text-white">
              Last 5 Days
            </div>
          </p>
        </div>
        <div className="font-medium">See all</div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <Card />
        <Card />
      </div>
    </section>
  );
};
