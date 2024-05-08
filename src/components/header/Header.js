import React from "react";
import Input from "./components/input/Input";
import Notify from "./components/notify/Notify";

export function Header() {

  return (
    <div className="flex items-center justify-between text-blue-gray-900 px-4 h-20 border-b border-gray-200">
      <div className="items-center gap-5 w-[600px]">
        <div>
          <Input className="focus:ring-0 ring-0" placeholder={"assv"} />
        </div>
      </div>
      <div className="flex items-center gap-3 text-2xl text-slate-300 text-center">
          <Notify />
      </div>
    </div>
  );
}