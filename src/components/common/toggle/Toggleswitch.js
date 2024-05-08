import React, { useState } from "react";
import { Switch } from "@material-tailwind/react";

function ToggleSwitch({label, onChange, value}) {
  return (
    <div className="flex mt-3">
      <div className="flex w-full items-center justify-between bg-[#f6f5fa] rounded-lg px-2 h-10">
         {label && <h1 className="text-[#8387a1] ">{label || ""}</h1>}
          <label class="inline-flex items-center cursor-pointer">
            <input onChange={onChange} checked={value} type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
            {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
          </label>
        {/* <Switch 
        
        id="custom-switch-component"
        ripple={false}
        className="h-full w-full checked:bg-[#2ec946]"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        /> */}
      </div>
    </div>
  );
}
export default ToggleSwitch;

