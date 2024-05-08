import React from 'react';
import memoji from "../../../../../../assets/images/memoji.jpg";
import memoji1 from "../../../../../../assets/images/memoji1.jpg";
import memoji2 from "../../../../../../assets/images/memoji2.jpg";
import Defaulttab from '../defaulttab/Defaulttab';

const Designdetail = () => {

  const Users = [
    { id: 1, name: 'Priority', image: memoji },
    { id: 2, name: 'Akmal', image: memoji1 },
    { id: 3, name: 'Aldiyyy', image: memoji2 }
  ];

  return (
    <div className="mt-5">
      <div className="space-y-2 px-6">
        <h2 className="text-3xl font-bold text-black h-10">Design System</h2>
        <p className="text-[#707999] text-sm h-14">The design system in the web version currently needs improvement and includes the addition of several other components.</p>
      </div>
      <div className="mt-3 flex flex-col gap-4 px-6">
        <div className="flex items-center">
          <div className='w-28'>
            <h1 className="text-sm text-[#707999]">Status</h1>
          </div>
          <div className=''>
            <h1 className="text-sm text-[#dab229] w-28 rounded-full px-3 bg-[#effbe5] font-bold py-1">In Progress</h1>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex w-28'>
            <h1 className="text-sm text-[#707999]">Assigned to</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {Users.map(user => (
              <div key={user.id} className='flex rounded-lg bg-[#f6f8ff] py-1'>
                <img src={user.image} alt={user.name} className='w-5 h-5 ms-1 border border-white bg-[#c8e8fa] rounded-full'></img>
                <h1 className="text-sm text-black px-1 font-semibold">{user.name}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-28'>
            <h1 className="text-sm text-[#707999]">Start date</h1>
          </div>
          <div className=''>
            <h1 className='text-sm font-semibold'>January 8, 2024</h1>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-28'>
            <h1 className="text-sm text-[#707999]">Due date</h1>
          </div>
          <div>
            <h1 className='text-sm font-semibold'>January 13, 2024</h1>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-28'>
            <h1 className="text-sm text-[#707999]">Priority</h1>
          </div>
          <div>
            <div className='flex rounded-lg bg-[#f2fbe7]  w-10 items-center'>
              <h1 className="h-1 w-1 bg-[#45d404] rounded-full absolute ms-2"></h1>
              <h1 className='text-sm text-[#59d434] rounded-lg bg-[#f2fbe7] px-4 font-bold'>Low</h1>
            </div>
          </div>
        </div>
      </div>
      <Defaulttab className=""/>
    </div>
  );
}
export default Designdetail;


