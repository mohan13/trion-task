import React from "react";
import { Input } from "./Input";
import { gallery_icon } from "./Icons";

const InputFile = () => {
  return (
    <div className="flex items-center justify-start mt-1">
      <label className="flex flex-col items-center justify-center border-[1px] border-[#1E2134] border-dashed  rounded-xl cursor-pointer bg-[#EDF2F6] hover:bg-gray-100 ">
        <div className="flex flex-col items-center justify-center p-4 ">
          <img src={gallery_icon} alt="gallery" className="w-6 h-6 mb-4" />
          {/* <svg
            className="w-5 h-5 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg> */}
          <p className="mb-2 text-sm text-gray-500 grid gap-2 text-center">
            Upload your <br /> photo
          </p>
        </div>
        <Input type="file" className="hidden" label="" />
      </label>
    </div>
  );
};

export default InputFile;
