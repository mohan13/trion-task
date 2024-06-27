import React from "react";
import { InavData, NavData } from "./NavData";
import Link from "next/link";
import { Button } from "../UI/Button";
import { TbBrandBooking } from "react-icons/tb";

export const Sidebar = () => {
  return (
    <aside className="flex h-screen sticky top-0 sm:w-64 w-16  flex-col items-center border-r bg-black px-5 py-8">
      <div className="text-white text-center sm:text-2xl text-sm px-2 ">
        CAR RENTAL
      </div>
      <div className="mt-6 sm:flex hidden flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 pb-3 border-b border-gray-400">
            {NavData?.map((item: InavData) => (
              <Link
                key={item.id}
                className="flex  items-center rounded-lg px-3 py-2 text-gray-400 hover:bg-red-500 hover:text-white "
                href={item.path}
              >
                {item.id === 3 ? (
                  <TbBrandBooking className="h-5 w-5 " />
                ) : (
                  <img src={item.icons} className="h-5 w-5" alt="icons" />
                )}
                <span className="mx-2 text-sm font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="mt-6">
          <div className="mt-6 flex items-center justify-between">
            <Button
              className="bg-gray-700"
              label="Logout"
              type="button"
              icon="/assets/icons/Logout.svg"
            />
          </div>
        </div>
      </div>

      <aside className="flex md:hidden h-screen flex-col justify-between items-center overflow-y-auto bg-black py-8">
        <nav className="flex flex-col mt-6 items-center space-y-6 pb-3 border-b border-gray-400">
          {NavData?.map((item: InavData) => (
            <Link
              key={item.id}
              className="flex items-center rounded-lg p-1.5 text-gray-400 hover:bg-red-500 hover:text-white"
              href={item.path}
            >
              {item.id === 3 ? (
                <TbBrandBooking className="h-6 w-6 " />
              ) : (
                <img src={item.icons} className="h-6 w-6" alt="icons" />
              )}
              {/* <span className="mx-2 text-sm font-medium">{item.title}</span> */}
            </Link>
          ))}
        </nav>

        <div className="cursor-pointer">
          <img className="mt-6" src="/assets/icons/Logout.svg" />
        </div>
      </aside>
    </aside>
  );
};
