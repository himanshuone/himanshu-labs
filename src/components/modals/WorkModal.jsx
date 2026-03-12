import React from 'react'
import image from '../../assets/img.jpg'
import { FaWindowClose } from "react-icons/fa";


function WorkModal({ProfileFun}) {
  return (
    <>

    <div className=" w-3/5 h-full fixed flex  justify-center items-center">

       <div className='flex flex-col overflow-hidden bg-white h-3/5 w-full rounded-2xl'>
       <div className=' h-[8vh] w-full flex justify-between  items-center p-5  border-3 border-b-2 rounded-t-2xl border-black bg-[#646a45]'>
        <div className=' text-xl font-stretch-110% text-gray-100'>C:\himanshu\works </div>
       <div className='  flex  hover:bg-red-700 text-white font-bold py-2 px-2 rounded ' onClick={()=>ProfileFun()}><FaWindowClose className="text-yellow-200"  size={20} />

        </div>

       </div>

       <div className="bg-[rgba(255,170,0,0.12)] border-x-2 rounded-x-2xl border-b-2 flex flex-col lg:flex-row xl:flex-row md:flex-col sm:flex-row rounded-b-2xl border-black h-full w-full overflow-scroll">
        <div className='flex  h-full justify-center '>
        <div className='w-[90%] flex bg-pink-700 h-30'></div>
       
        </div>
        

       </div>
       
       

       </div>
    </div>

    </>
  )
}

export default WorkModal