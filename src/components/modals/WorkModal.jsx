import React from 'react'
import image from '../../assets/img.jpg'
import { FaWindowClose } from "react-icons/fa";
import github from './workmodalAssets/github.png';
import visual from './workmodalAssets/visual.png';
import postman from './workmodalAssets/postman.png';
import mongo from './workmodalAssets/mongo.png';
import stackoverflow from './workmodalAssets/stackoverflow.png'
import figma from './workmodalAssets/figma.png'
import django from './workmodalAssets/django.png'
import reactt from './workmodalAssets/react.png'
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";



function WorkModal({WorkFun}) {
  return (
    <>

    <div className=" w-3/5 h-full fixed flex  justify-center items-center">

       <div className='flex flex-col overflow-hidden bg-white h-3/5 w-full rounded-2xl'>
       <div className=' h-[8vh] w-full flex justify-between  items-center p-5  border-3 border-b-2 rounded-t-2xl border-black bg-[#646a45]'>
        <div className=' text-xl font-stretch-110% text-gray-100'>C:\himanshu\works </div>
       <div className='  flex  hover:bg-red-700 text-white font-bold py-2 px-2 rounded ' onClick={()=>WorkFun()}><FaWindowClose className="text-yellow-200"  size={20} />

        </div>

       </div>

       <div className="bg-[rgba(255,170,0,0.12)] border-x-2 rounded-x-2xl border-b-2 flex flex-col lg:flex-row xl:flex-row md:flex-col sm:flex-row rounded-b-2xl border-black h-full w-full overflow-scroll">
        <div className='flex flex-col  h-full w-full items-center'>
        <div className='w-[80%] flex  bg-[#F1B679]  h-12'> </div>
          <div className='flex  text-5xl mt-8 font-mono font-semibold text-gray-600'>TOOLS</div>
          
          <div className='flex flex-col w-4/5 h-50 mt-12 gap-10'>
            <div className='flex justify-evenly w-full h-full'>

          <div className='flex-col w-fit flex items-center'>
            <img src={github} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Github</div>
          </div>
          <div className='flex-col w-fit flex items-center'>
            <img src={visual} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Visual</div>
          </div>
          
          <div className='flex-col w-fit flex items-center'>
            <img src={postman} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Postman</div>
          </div>
          <div className='flex-col w-fit flex items-center'>
              <img src={mongo} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Mongo</div>
          </div>
          </div>
          <div className='flex justify-evenly w-full h-full '>

          <div className='flex-col w-fit flex items-center'>
            <img src={stackoverflow} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>StackOF</div>
          </div>
          <div className='flex-col w-fit flex items-center'>
            <img src={figma} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Figma</div>
          </div>
          
          
          </div>
          </div>

        <div className='flex flex-col  h-full w-full items-center mt-30'>
                      <div className='flex text-5xl mt-8 font-mono font-semibold  text-gray-600'>LANGUAGE</div>
                    <div className='flex-col  justify-center mt-10 space-y-3'> 

                      
                      <div className=' flex gap-5 justify-center'>
                         <div className='border-2 rounded-4xl px-10 py-1  flex justify-center bg-[#F1B679]  text-2xl font-stretch-75%'>C</div>
                      <div className='border-2 rounded-4xl px-17 py-1  flex justify-center bg-[#646a45] text-gray-200 text-2xl font-stretch-75%'>JavaScript</div>
                      
                      </div>
                      <div className=' flex gap-5 justify-center'>
                         <div className='border-2 rounded-4xl px-17 py-1  flex justify-center  bg-[#646a45] text-gray-200 text-2xl font-stretch-75%'>Python</div>
                      <div className='border-2 rounded-4xl px-10 py-1  flex justify-center bg-[#F1B679]  text-2xl font-stretch-75%'>C++</div>
                      
                      </div>
                      
                   </div>
                    <div className='flex text-5xl mt-18 font-mono font-semibold  text-gray-600'>TECH-STACKS</div>
                    <div className='flex flex-col w-4/5 h-50 mt-12 gap-10'>
            <div className='flex justify-evenly w-full h-full'>

          <div className='flex-col w-fit flex items-center'>
           <SiExpress className='size-20'/>
 
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Express</div>
          </div>
          <div className='flex-col w-fit flex items-center'>
            <img src={reactt} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>React</div>
          </div>
          
          <div className='flex-col w-fit flex items-center'>
            <img src={django} alt="" className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Django</div>
          </div>
          <div className='flex-col w-fit flex items-center'>
             <SiTailwindcss className='size-20'/>
            <div className='flex justify-center items-center font-mono font-semibold text-gray-600 text-xl'>Tailwind</div>
          </div>
          </div>
          
 <div className='flex text-5xl mt-18 font-mono font-semibold justify-center  text-gray-600'>DEVELOPMENT</div>





          </div>
                    </div>

        </div>
        

       </div>
       
       

       </div>
    </div>

    </>
  )
}

export default WorkModal