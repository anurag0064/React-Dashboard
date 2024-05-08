import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Input from "../header/components/input/Input";
import { PiGridFourFill } from "react-icons/pi";
import photo from "../../assets/images/photo.png";
import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import { HiMenuAlt4 } from "react-icons/hi";
import Tab from "./components/tab/tab";
import Card from "./components/card/Card";
import Ellipsis from "./components/ellipsis/ellipsis";

const menuItems = [
    { text: "Projects", icon: <IoIosArrowForward />, link: "#" },
    { text: "International", icon: <IoIosArrowForward />, link: "#" },
    { text: "Product web", icon: null, link: "#" },
];

const Productweb = () => {
    return (
        <div>
            <ul className="flex gap-2 px-4 h-16">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <a href={item.link} className="flex items-center text-slate-400 hover:text-black">
                            <div>{item.text}</div>
                            {item.icon && <div className="ml-2">{item.icon}</div>}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center px-4 h-14">
                <h1 className="text-3xl">All sprints</h1>
                <div className="flex gap-3 items-center">
                   <Ellipsis/>
                    <button className=" bg-[#e458e6] hover:bg-fuchsia-400 rounded-full py-2 px-5  text-white text-sm">
                        Complete Sprint
                    </button>
                </div>
            </div>
            <div className="flex gap-2 px-4 h-20 items-center">
                <div className="flex w-2/3  justify-center items-center gap-3">
                    <Input />
                    <Tab />
                </div>
                <div className="flex w-1/2 justify-end items-center gap-3">
                    <div className="flex">
                        <div className="left-0 z-10 border-2 border-white rounded-full">
                            <img src={photo} className="h-10 " alt="photo" />
                        </div>
                        <div className=" -ml-[10px] z-10 border-2 border-white rounded-full" >
                            <img src={photo1} className="h-10" alt="photo1" />
                        </div>
                        <div className=" -ml-[10px] z-10 border-2 border-white rounded-full ">
                            <img src={photo2} className="h-10" alt="photo2" />
                        </div>
                        <div className=" -ml-[10px] z-10 border-2 border-white rounded-full" >
                            <img src={photo3} className="h-10" alt="photo3" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex gap-3" >
                        <HiMenuAlt4 className="border border-slate-200 bg-[#f5d9ff] text-purp hover:bg-fuchsia-300 text-4xl rounded-full p-2" />
                        <PiGridFourFill className="border border-slate-200  text-4xl rounded-full hover:bg-slate-300  text-[#5a6871] p-2"/> 
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="px-4">
                    <button className="bg-[#e3e3e3] text-[#737f8a] py-1 px-3 rounded-full hover:bg-slate-300 text-sm">To do</button>
                    <Card/>
                </div>
                <div className=" px-4">
                    <button className="bg-[#e3e3e3] text-[#737f8a] py-1 px-3 rounded-full hover:bg-slate-300 text-sm">In progress</button>
                     <Card/>
                </div>
                <div className=" px-4">
                    <button className="bg-[#e3e3e3] text-[#737f8a]  py-1 px-3 rounded-full hover:bg-slate-300 text-sm">Done</button>
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default Productweb;

