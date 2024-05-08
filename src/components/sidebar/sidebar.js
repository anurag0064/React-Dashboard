import React from "react";
import { PiAlienFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosTrendingDown } from "react-icons/io";
import { MdOutlineSdCard } from "react-icons/md";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export function Sidebar() {
  return (
    <div className="block h-screen w-80 shadow-xl shadow-blue-gray-900/5 bg-black">
      <div className="flex items-center px-4 h-24">
        <Typography variant="h5" color="blue-gray">
          <div className="flex items-center gap-3">
            <PiAlienFill className="text-[#ebb2ff] text-5xl" />
            <div>
              <h1 className="text-white">Roshan</h1>
              <p className="text-gray-500 text-sm">Product Management</p>
            </div>
          </div>
        </Typography>
      </div>
      <div className="flex flex-col h-[calc(100vh-6rem)] overflow-y-auto py-4 px-4">
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <MdOutlineSdCard className="h-5 w-5" />
          </ListItemPrefix>
          <a href="active" className="flex-1 active:bg-gray-800 active:text-white">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Backlog
            </Typography>
          </a>
        </ListItem>
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <GiSoundWaves className="h-5 w-5" />
          </ListItemPrefix>
          <a href="#" className="flex-1">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Active Sprints
            </Typography>
          </a>
        </ListItem>
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <IoIosTrendingDown className="h-5 w-5" />
          </ListItemPrefix>
          <a href="active" className="flex-1">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Reports
            </Typography>
          </a>
        </ListItem>
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <IoExtensionPuzzle className="h-5 w-5" />
          </ListItemPrefix>
          <a href="active" className="flex-1">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Components
            </Typography>
          </a>
        </ListItem>
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <SlCalender className="h-5 w-5" />
          </ListItemPrefix>
          <a href="active" className="flex-1">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Releases
            </Typography>
          </a>
        </ListItem>
        <ListItem className="flex gap-2 text-gray-500 group hover:text-white hover:bg-slate-600 hover:rounded-full mb-2 p-3">
          <ListItemPrefix className="group-hover:text-[#e458e6]">
            <VscProject className="h-5 w-5" />
          </ListItemPrefix>
          <a href="active" className="flex-1">
            <Typography color="blue-gray" className="mr-auto font-normal">
              Project Pages
            </Typography>
          </a>
        </ListItem>
      </div>
    </div>
  );
}
