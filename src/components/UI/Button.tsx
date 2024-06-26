import React from "react";

type Ibtn = {
  type: string;
  label: string;
  className: string;
  icon?: string;
};
export const Button = ({
  type = "button",
  label,
  icon,
  className = "",
  ...props
}: Ibtn) => {
  return (
    <button
      {...props}
      type="button"
      className={`${className}
      rounded-[4px]
      flex items-center gap-3 justify-center
      px-3 py-2 sm:text-sm text-base sm:font-semibold font-medium text-white shadow-sm
      `}
    >
      {icon && <img src={icon} alt="img" className="h-5 w-5" />}
      {label}
    </button>
  );
};
