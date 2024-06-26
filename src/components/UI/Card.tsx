import React from "react";
import { car_icon } from "./Icons";
import { Button } from "./Button";
import { car_details } from "../Constants/car-details";
import { FiPhone } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export function Card() {
  return (
    <div className="mx-auto w-full max-w-7xl   ">
      {/* <div className="mx-auto my-4 max-w-2xl md:my-6"> */}
      <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
        <div className="mb-4 flex items-center rounded-lg ">
          <div className="mr-2 b  p-2 ">
            <img src={car_icon} alt="car" />
          </div>

          <h2 className=" text-xs font-semibold">Car Name</h2>
        </div>

        <div className="mb-4 flex  items-center justify-between rounded-lg py-2">
          <p className="sm:text-sm sm:flex grid  rounded-[4px] bg-gray-200 px-4 py-2 sm:font-medium font-normal">
            Booking Date : <span>11 Jun 2024</span>
          </p>

          <Button
            className="rounded-full bg-red-500 hover:bg-red-500/80 "
            label="In use"
            type="button"
          />
        </div>

        <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
          <div className="grid gap-3">
            <div>
              <p className="text-sm font-bold text-gray-900">Personal Info</p>
              <div className="flex items-center gap-2">
                <div>
                  <img
                    src="https://images5.alphacoders.com/325/325672.jpg"
                    alt="user"
                    className="h-5 w-5 rounded-full"
                  />
                  {/* <FaUser /> */}
                </div>
                <div>Chirs Richard</div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Car Model</p>
              <div className="flex gap-2">Thunder Blaze</div>
            </div>
          </div>

          {/* //contact details */}
          <div className="grid gap-3">
            <div>
              <p className="text-sm font-bold text-gray-900">Contact Details</p>
              <div className="flex items-center gap-2">
                <div>
                  <FiPhone />
                </div>
                <div>986574321</div>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Registration Number
              </p>
              <div className="flex gap-2">ABC-321</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
