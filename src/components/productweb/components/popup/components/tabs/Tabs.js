import { useState } from 'react';
import TodoItems from '../designdetail/components/todoItems';
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus, FaRegSmile } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import memoji2 from "../../../../../../assets/images/memoji2.jpg";
import { ImAttachment } from "react-icons/im";
import CommentAction from './Tabcomponents/commentAction';


const tabsData = [
    { label: "Subtasks" },
    { label: "Attachment" },
    { label: "Comments" }
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState();
    const [dropdown, setDropdown] = useState();

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div>
            <div className="mb-3 mt-3 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex gap-4 text-sm font-medium text-center px-6" role="tablist">
                    {tabsData.map((tab, index) => (
                        <li key={index}>
                            <button
                                className={`border-b-2 rounded-t-lg ${activeTab === index ? 'text-black border-black' : 'text-[#707999]'} hover:text-black hover:border-black dark:hover:text-gray-300 font-semibold leading-8`}
                                type="button"
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {tabsData.map((tab, index) => (
                    <div key={index} className={`rounded-lg ${activeTab === index ? '' : 'hidden'}`} role="tabpanel">
                        {tab.label === "Subtasks" && (
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex justify-between items-center px-6'>
                                    <div className='flex items-center gap-2'>
                                        <button onClick={handleDropdown} className="dropbtn">
                                            <IoMdArrowDropup className={`text-[#707999] ${dropdown ? 'rotate-180' : ''}`} />
                                        </button>
                                        <h1 className='text-[#2a2a33] font-semibold text-sm'>Subtasks</h1>
                                        <h1 className='text-[#707999] text-sm'>12/25</h1>
                                    </div>
                                    <div>
                                        <button className="flex items-center gap-2 text-xs bg-white hover:bg-white text-black border border-slate-200 px-2 py-1 rounded justify-end font-semibold">
                                            <FaPlus />
                                            Add Subtasks
                                        </button>
                                    </div>
                                </div>
                                {dropdown && (
                                    <div id="myDropdown" className="dropdown-content">
                                        <TodoItems />
                                    </div>
                                )}
                            </div>
                        )}
                        {tab.label === "Attachment" && (
                            <div className={`px-6 rounded-lg ${activeTab === index ? '' : 'hidden'}`} role="tabpanel">
                                <div className="flex border border-slate-200 justify-between p-3 rounded-xl">
                                    <div className='flex gap-2 items-center'>
                                        <ImAttachment className='text-sm hover:text-slate-400' />
                                        <h1 className='font-semibold text-sm'>Attachment</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <BsThreeDotsVertical className='text-xl hover:text-slate-400' />
                                    </div>
                                </div>
                            </div>
                        )}
                        {tab.label === "Comments" && (
                            <div className={`rounded-lg ${activeTab === index ? '' : 'hidden'}`} role="tabpanel">
                                <div className='flex flex-col px-6 gap-3'>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            <img src={memoji2} className="w-10 h-10 ms-1 border border-slate-300 rounded-full bg-[#c5e9fe]" alt="memoji2" />
                                        </div>
                                        <div className="flex ml-2 w-full">
                                            <input
                                                type="search"
                                                className="border-none  bg-slate-100 text-black outline-none h-10 block w-full  text-sm rounded-xl  focus:ring-0 ring-0"
                                                placeholder="Add a comment.... "
                                            />
                                        </div>
                                    </div>
                                    <div className='flex  gap-2 '>
                                        <div className='flex'>
                                            <img src={memoji2} className='w-10 h-10 ms-1 border border-slate-300 rounded-full bg-[#c5e9fe]' alt='memoji2' />
                                        </div>
                                        <div>
                                            <div className='flex gap-2 items-center'>
                                                <h1 className='font-semibold'>Rahul Saini</h1>
                                                <h1 className='text-[#707999] text-sm'>19 March 2024 at 9:00</h1>
                                            </div>
                                            <div className=''>
                                                <h2 className='text-slate-500 text-sm'>Nice</h2>
                                                <h2 className='text-slate-500 text-sm'>Good</h2>
                                            </div>
                                            <div className='flex'>
                                                <CommentAction />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
