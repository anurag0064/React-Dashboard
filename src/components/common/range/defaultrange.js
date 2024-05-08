import React from 'react'
import { Slider } from "@material-tailwind/react";

export default function Defaultrange() {
  return (
    <div>
           <Slider color="blue" defaultValue={50} className='h-5'/>
    </div>
  )
}
