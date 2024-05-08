// import React, { useState } from 'react';
// import Popup from '../popup/Popup'; 
// import { IoIosBookmark } from "react-icons/io";
// import { MdKeyboardDoubleArrowUp } from "react-icons/md";
// import { FaCircleQuestion } from "react-icons/fa6";
// import { SiMinutemailer } from "react-icons/si";

// const content = [
//   { name: 'Refactoring', text: 'As a translator, I want to integrate Crowdin webhook to notify translators about changed strings', icon: <IoIosBookmark />, icons: <MdKeyboardDoubleArrowUp />, link: "" },
//   { text: 'As a user, I want to see actual overusage price for next download', icon: <IoIosBookmark />, icons: <FaCircleQuestion />, link: "" },
//   { text: 'As a team licensed User, I want to use multiplied limits', icon: <SiMinutemailer />, icons: <FaCircleQuestion /> },
//   { name: 'User Filtering', text: 'As a user, I want to be able to filter search results by location', icon: <MdKeyboardDoubleArrowUp /> },
// ];

// function Card() {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   return (
//     <div className="flex flex-wrap">
//       {content.map((item, index) => (
//         <div key={index} className="w-full px-1 py-3">
//           <div className="bg-white rounded-lg px-3">
//             <div className='py-2'>
//               {item.name && <button className='bg-yellow-200 rounded-full px-4 text-orange'>{item.name}</button>}
//             </div>
//             <div className={`text-sm text-gray-900 p-4 rounded-lg ${!item.name && 'mt-4'}`}>
//               {item.text}
//             </div>
//             <div className='flex items-center justify-between px-3 h-10'>
//               <div className='flex gap-4 text-xl text-blue-600'>
//                 {item.icon}{item.icons}
//               </div>
//               <div className='flex text-base gap-3'>
//                 <h1>FC-7</h1>
//                 <div className='flex relative'>
//              <button className='px-[5px] text-[10px] rounded-full bg-[#d7edff]'>PG</button>
//                    <div class="absolute top-4 right-0 border border-white left-4 z-10 h-2 w-2 bg-[#2ec658] rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
//     </div>
//   );
// }

// export default Card;

import React, { useState } from 'react';
import Popup from '../popup/Popup';
import { IoIosBookmark } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaCircleQuestion } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";

const content = [
  { name: 'Refactoring', text: 'As a translator, I want to integrate Crowdin webhook to notify translators about changed strings', icon: <IoIosBookmark />, icons: <MdKeyboardDoubleArrowUp />, link: "" },
  { text: 'As a user, I want to see actual overusage price for next download', icon: <IoIosBookmark />, icons: <FaCircleQuestion />, link: "" },
  { text: 'As a team licensed User, I want to use multiplied limits', icon: <SiMinutemailer />, icons: <FaCircleQuestion /> },
  { name: 'User Filtering', text: 'As a user, I want to be able to filter search results by location', icon: <MdKeyboardDoubleArrowUp /> },
];

function Card() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  return (
    <div className="flex flex-wrap">
      {content.map((item, index) => (
        <div key={index} className="w-full px-1 py-3" onClick={handleCardClick}>
          <div className="bg-white rounded-lg px-3">
            <div className='py-2'>
              {item.name && <button className='bg-yellow-200 rounded-full px-4 text-orange'>{item.name}</button>}
            </div>
            <div className={`text-sm text-gray-900 p-4 rounded-lg ${!item.name && 'mt-4'}`}>
              {item.text}
            </div>
            <div className='flex items-center justify-between px-3 h-10'>
              <div className='flex gap-4 text-xl text-blue-600'>
                {item.icon}{item.icons}
              </div>
              <div className='flex text-base gap-3'>
                <h1>FC-7</h1>
                <div className='flex relative'>
                  <button className='px-[5px] text-[10px] rounded-full bg-[#d7edff]'>PG</button>
                  <div className="absolute top-4 right-0 border border-white left-4 z-10 h-2 w-2 bg-[#2ec658] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />}
    </div>
  );
}

export default Card;






