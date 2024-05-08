import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoNotifications, IoSettings } from 'react-icons/io5'; // Import notification and settings icons
import photo from "../../../../assets/images/photo.png";
import DropDown from '../../../common/dropdown';

const notificationItems = [
  { label: 'Notification 1', href: '#' },
  { label: 'Notification 2', href: '#' },
];

const profileItems = [
  { label: 'Account settings', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'License', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Notify() {
  return (
      <div className="flex relative justify-center items-center gap-3">
          <DropDown 
            trigger={<IoNotifications className="h-5 w-7 text-[#bfbfbf] hover:text-slate-400" />}
            items={notificationItems}
          />

            <DropDown 
            trigger={<IoSettings className="h-5 w-5 text-[#bfbfbf] hover:text-slate-400" />}
            items={notificationItems}
          />
          
          <div className="absolute top-0 right-20 h-2 w-2 bg-red-500 rounded-full z-10"></div>
          
          <DropDown 
            trigger={<img src={photo} alt="photo" className="h-8 w-8 rounded-full" />}
            items={profileItems}
          />
      </div>
  )
}

