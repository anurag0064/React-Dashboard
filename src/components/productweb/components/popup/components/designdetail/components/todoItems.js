import React from 'react';
import { Checkbox } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

const items = [
    { id: 1, title: "Pagination", icon: CiEdit },
    { id: 2, title: "Avatar", icon: null },
    { id: 3, title: "Accordion", icon: null, isCompleted: true },
    { id: 4, title: "Text Field", icon: null },
];

export default function TodoItems() {
    return (
        <div className='px-6 overflow-y-auto max-h-96'>
            {items.map(item => (
                <TodoItem item={item} />
            ))}
        </div>
    );
}


const TodoItem = ({item}) => {
    
    return( 
    <div key={item.id} className='flex justify-between hover:bg-slate-100 rounded-lg group'>
        <div className='flex items-center'>
            <Checkbox defaultChecked={item.isCompleted}/>
            <h1 className={`text-sm font-semibold ${item.isCompleted ? 'line-through text-slate-400' : ''}`}>{item.title}</h1>
        </div>
        <div className='flex items-center gap-2 text-lg'>
            {item.icon && <item.icon className='group-hover:text-slate-500'/>}
            <MdOutlineDeleteOutline className='text-[#da2f3a] group-hover:text-fuchsia-500' />
            <CgMenuGridO className='group-hover:text-slate-500'/>
        </div>
    </div>
    );
}