import React from 'react'
import { Button } from '@material-tailwind/react';
import { FaRegSmile } from "react-icons/fa";

export default function CommentAction() {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <Button className='text-[#707999] px-0 hover:text-slate-600'>Edit</Button>
                <span className="h-1 w-1 bg-[#707999] rounded-full "></span>
                <Button className='text-[#707999] px-0 hover:text-slate-600'>Delete</Button>
                <span className="h-1 w-1 bg-[#707999] rounded-full "></span>
                <Button className='text-[#707999] px-0 hover:text-slate-600'>Reply</Button>
                <span className="h-1 w-1 bg-[#707999] rounded-full "></span>
                <div className='border border-slate-300 rounded-xl w-10 h-7 items-center flex justify-center'>
                    <FaRegSmile className=' rounded-full text-[#707999] hover:text-slate-400' />
                </div>
            </div>
        </div>
    )
}
