import React, { ComponentPropsWithoutRef, Ref, forwardRef } from "react";

interface Iinput extends ComponentPropsWithoutRef<"input"> {
  label: string;
  type: string;
  placeholder?: string;
  className: string;
}

const InputRef = (
  { type, label, placeholder, className }: Iinput,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <div>
      {label && (
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`${className} w-full flex  rounded-md border border-black/30 bg-[#E0E4EC] px-3 py-2 text-sm placeholder:text-gray-600`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Input = forwardRef(InputRef);
