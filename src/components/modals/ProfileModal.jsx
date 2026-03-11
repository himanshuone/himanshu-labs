import React from 'react'
import image from '../../assets/img.jpg'
import { FaWindowClose } from "react-icons/fa";


function ProfileModal({modal}) {
  return (
    <>

    <div className=" w-3/5 h-full fixed flex  justify-center items-center">

       <div className='flex flex-col overflow-hidden bg-white h-3/5 w-full rounded-2xl'>
       <div className=' h-[8vh] w-full flex justify-between  items-center p-5  border-3 border-b-2 rounded-t-2xl border-black bg-[#646a45]'>
        <div className=' text-xl font-stretch-110% text-gray-100'>C:\himanshu\portfolio </div>
       <div className='  flex  hover:bg-red-700 text-white font-bold py-2 px-2 rounded ' onClick={()=>modal()}><FaWindowClose className="text-yellow-200"  size={20} />

        </div>

       </div>

       <div className="bg-[rgba(255,170,0,0.12)] border-x-2 rounded-x-2xl border-b-2 flex rounded-b-2xl border-black h-full w-full">
        <div className='w-2/5 flex h-full  items-center p-5'>
        <div className='bg-white h-70 w-70 border rounded-full overflow-hidden'>
        <img src={image} alt="" className='size-max'/>

        </div>
        </div>
        <div className='bg-white h-full w-full flex flex-col justify-center'>
          <div className='text-4xl'>hi! i'm</div>
          <div className='text-6xl text-[#ff7a05]'>Himanshu</div>
          <div className='text-2xl'>im a web developer</div>
        </div>

       </div>
       
       

       </div>
    </div>

    </>
  )
}

export default ProfileModal