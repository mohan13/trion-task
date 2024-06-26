import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import InputFile from "@/components/UI/InputFile";
import React from "react";

export const Forms = () => {
  return (
    <div className="mx-auto w-full py-2 px-3">
      <form className="mx-auto my-4 md:my-6">
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">List a Car</p>
          <div className="mt-6">
            <p>Your Profile Picture</p>

            <InputFile />
          </div>

          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-3 md:space-y-0">
            <Input
              className=""
              label="Full Name"
              type="text"
              placeholder="Please enter your full name"
            />
            <Input
              className=""
              label="Email"
              type="email"
              placeholder="Please enter your email"
            />
            <Input
              className=""
              label="Phone Number"
              placeholder="+1 | Please enter your phone number"
              type="text"
            />

            <div className="col-span-3 grid">
              <Input
                className="placeholder: h-24"
                label="Full Address"
                placeholder="Please enter your full address"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          <p className="text-sm font-bold text-gray-900">Documentation</p>
          <div className="mt-6">
            <p>Upload Driver&apos;s license</p>

            <InputFile />
          </div>

          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-3 md:space-y-0">
            <Input
              className=""
              label="Driver's License Number"
              placeholder="Please enter your Driver's License Number"
              type="text"
            />
            <Input className="" label="Year" type="text" />
            <Input className="" label="Model" type="text" />

            <Input className="" label="Registration Number" type="text" />
            <Input
              className=""
              label="Availability(from)"
              type="text"
              placeholder="MM/YY"
            />
            <Input
              className=""
              label="Availability(to)"
              placeholder="MM/YY"
              type="text"
            />

            <Input className="" label="Daily Rate" type="text" />
          </div>
          <Button
            label="Save"
            type="submit"
            className="bg-red-500 mt-6 hover:bg-red-500/80"
          />
        </div>
      </form>
    </div>
  );
};
