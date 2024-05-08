import React, { useState } from 'react';
import { GiSandsOfTime } from "react-icons/gi";
import { TbProgress } from "react-icons/tb";
import { TfiTimer } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import ToggleSwitch from '../../../../../common/toggle/toggleSwitch';
import { Checkbox } from '@material-tailwind/react';
import memoji from "../../../../../../assets/images/memoji.jpg";
import RangeSlider from '../../../../../common/rangeslider/rangeSlider';

const data = [
  {
    name: 'Deo Ananda',
    task: 'checklist Subtasks',
    time: 'Jun 8, 2024 at 10:30 AM',
    progress: 'done'
  },
  {
    name: 'Rahmadini',
    task: 'moved task card',
    subTask: 'Design System',
    time: 'Jun 8, 2024 at 09:00 AM',
    progress: 'inprogress'
  },
  {
    name: 'Rahmadini',
    task: 'created task',
    subTask: 'Design System',
    time: 'Jun 7, 2024 at 02:00 PM',
    progress: 'created'
  },
];



const ProjectStatus = () => {
  const [switchStatus, setSwitchStatus] = useState(true);
  return (
    <div className="flex flex-col">
      <div className='p-6'>
        <div className='text-sm font-semibold text-black h-8'>Project status</div>
        <div className='border border-gray-200 rounded-lg p-4 mb-4 flex justify-between items-center'>
          <div className='w-full'>
            <div className="flex items-center justify-between">
              <div className='flex gap-1 items-center'>
                <GiSandsOfTime />
                <h1 className="mr-2 text-sm font-semibold">Time Remaining:</h1>
              </div>
              <h1 className="flex justify-end items-end text-sm text-[#8387a1] font-semibold">4d</h1>
            </div>
            <ToggleSwitch value={switchStatus} onChange={(event) => setSwitchStatus(event.target.checked)} label={"Activate Reminder"} />
          </div>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 flex justify-between items-center'>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className='flex items-center gap-1'>
                <TbProgress />
                <div className="mr-2 text-sm font-semibold">Progress</div>
              </div>
              <h1 className='flex text-sm text-[#8387a1] font-semibold'>60%</h1>
            </div>
            <RangeSlider />
          </div>
        </div>
      </div>
      <div className='bg-slate-200 h-[1px]'></div>
      <div className='flex gap-2 flex-col px-6 overflow-scroll'>
        <div className='flex mt-5 justify-between h-10 p-2'>
          <h1 className='text-sm font-semibold'>Activities</h1>
          <TfiTimer className='text-[#8387a1] hover:text-slate-700' />
        </div>
        {data.map((item, index) => (
          <div className='flex flex-col gap-2 ' key={index}>
            <div className='flex gap-2'>
              <div>
                <img src={memoji} className='w-10 h-10 ms-1 border border-slate-300 rounded-full bg-[#c5e9fe]' alt='memoji' />
              </div>
              <div className='text-xs'>
                <div className='flex gap-2 items-center'>
                  <h1 className='text-sm font-semibold'>{item.name}</h1>
                  <h1 className='text-[#707999] text-sm'>{item.task}</h1>
                  {item.subTask && <h1 className='text-sm font-semibold'>{item.subTask}</h1>}
                </div>
                <div>
                  <h1 className='text-[#707999]'>{item.time}</h1>
                </div>
              </div>
            </div>
            <div>
              {item.progress === "done" ? (
                <div className='flex flex-col'>
                  <div className='flex h-10'>
                    <div className='w-[46px] flex justify-center'>
                      <div className='w-[1px] bg-[#d5d8ec]' />
                    </div>
                    <div className='flex items-center gap-2'>
                      <Checkbox />
                      <h1 className='text-sm line-through text-slate-400 font-semibold'>Accordion</h1>
                    </div>
                  </div>
                </div>
              ) : item.progress === "inprogress" ? (
                <div className='flex flex-col'>
                  <div className='flex h-10'>
                    <div className='w-[46px] flex justify-center'>
                      <div className='w-[1px] bg-[#d5d8ec]' />
                    </div>
                    <div className='flex items-center gap-2'>
                      <h1 className='text-sm text-[#f014b6] w-14 rounded-full px-3 bg-[#fed7f2] font-bold py-1'>ToDo</h1>
                      <FaArrowRightLong className='text-[#8387a1]' />
                      <h1 className='text-sm text-[#eab308] w-28 rounded-full px-3 bg-[#fef9c3] font-bold py-1'>In Progress</h1>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex flex-col'>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectStatus;


