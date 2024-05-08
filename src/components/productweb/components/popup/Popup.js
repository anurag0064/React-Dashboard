import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import React from 'react';
import { LuArrowRightToLine } from "react-icons/lu";
import { RxSize } from "react-icons/rx";
import { MdOutlineStraight } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import ProjectStatus from './components/projectstatus/ProjectStatus';
import Designdetail from './components/designdetail/taskDetails';

export default function Popup({ isOpen, onClose = () => null }) {
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[1000px] ">
                                <div className="bg-white">
                                    <div className="sm:items-start">
                                        <div className='flex w-full h-14'>
                                            <div className="flex flex-1 gap-3 items-center border-b px-6">
                                                <LuArrowRightToLine className="text-2xl hover:text-slate-400 text-[#707999] font-bold" />
                                                <RxSize className="text-2xl text-[#707999] hover:text-slate-400 font-bold" />
                                                <MdOutlineStraight className="text-2xl text-[#707999] hover:text-slate-400 font-bold" />
                                                <h1 className="text-sm text-[#707999]">Task Detail</h1>
                                            </div>
                                            <div className="flex gap-4 justify-end items-center border-b px-4">
                                                <RiShareForwardLine className="text-2xl text-[#707999] hover:text-slate-400 font-bold" />
                                                <div className='flex justify-center border border-[[#707999]] rounded-md w-14 items-center gap-1'>
                                                    <LuEye className="h-8 text-[#707999] hover:text-slate-400 font-bold" />
                                                    <span className='text-[#707999]'>6</span>
                                                </div>

                                                <BsThreeDots className="text-2xl text-[#707999] hover:text-slate-400 font-bold" />
                                                <button
                                                    type="button"
                                                    className="text-xl text-[#707999] hover:text-slate-400 font-bold"
                                                    onClick={() => onClose()}
                                                >
                                                    <IoMdClose />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex bg-white rounded-lg h-[600px]">
                                            <div className="flex flex-1 border-r">
                                                <Designdetail />
                                            </div>
                                            <div className="flex flex-1">
                                                <div className='w-full'>
                                                    <ProjectStatus />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}