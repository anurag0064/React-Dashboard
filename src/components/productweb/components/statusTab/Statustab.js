import { IoIosArrowDown } from "react-icons/io";

const Statustab = () => {
  return (
<div className="w-3/4">
  <div>
    <ul className="flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60 gap-3" data-tabs="tabs" role="list">
      <li className="flex-auto text-center">
        <a className="flex items-center justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700  bg-[#ffffff] py-2 px-3" data-tab-target role="tab" href="/" aria-selected="true">
          <span className="ml-1">Only My Issues</span>
        </a>
      </li>
      <li className="flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-[#ad0fee]  bg-[#f5d9ff] py-2 px-3" data-tab-target role="tab" href="/" aria-selected="false">
          <span className="ml-1">Recently Updated</span>
        </a>
      </li>
      <li className="flex-auto text-center">
        <a className="flex items-center justify-center w-full  mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700  bg-[#ffffff] py-2 px-3" data-tab-target role="tab" href="/" aria-selected="false">
          <span className="ml-1">All Sprints </span>
        </a>
      </li>
    </ul>
  </div>
</div>

  )
}
export default Statustab;