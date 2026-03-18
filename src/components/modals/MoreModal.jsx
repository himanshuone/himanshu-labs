

import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaMediumM } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";






import { FaWindowClose } from "react-icons/fa";
import github from './workmodalAssets/github.png';
import leet from './workmodalAssets/leet.png';
import hackerrank from './workmodalAssets/hackerrank.png'
import gfg from './workmodalAssets/gfg.png';


import django from './workmodalAssets/django.png'
import reactt from './workmodalAssets/react.png'
import application from './workmodalAssets/app.png'
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function MoreModal({ MoreFun }) {
  return (
    <>
      <div className=" w-3/5  h-full fixed flex  justify-center items-center min-w-120 ">
        <div className="flex flex-col overflow-hidden bg-white h-3/5 w-full rounded-2xl">
          <div className=" h-[8vh] w-full flex justify-between  items-center p-5  border-3 border-b-2 rounded-t-2xl border-black bg-[#646a45]">
            <div className=" text-xl font-stretch-110% text-gray-100">
              C:\himanshu\more
            </div>
            <div
              className="  flex  hover:bg-red-700 text-white font-bold py-2 px-2 rounded "
              onClick={() => MoreFun()}
            >
              <FaWindowClose className="text-yellow-200" size={20} />
            </div>
          </div>

          <div className="bg-[rgba(255,170,0,0.12)] border-x-2 rounded-x-2xl border-b-2 flex flex-col lg:flex-row xl:flex-row md:flex-col sm:flex-row rounded-b-2xl border-black h-full w-full overflow-scroll">
            <div className="flex flex-col  h-full w-full items-center">
              <div className="w-[80%] flex  bg-[#F1B679]  h-12"> </div>
              <div className="flex  text-5xl mt-8 font-mono font-semibold text-gray-600">
                More
              </div>

              <div className="flex flex-col w-4/5 h-50 mt-12 gap-10">
                <div className="flex justify-evenly w-full h-full">
                  <div className="flex-col w-fit flex items-center" onClick={()=>window.open("https://github.com/himanshuone", "_blank")}>
                    <img src={github} alt="" className="size-20" />
                    <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                      github
                    </div>
                  </div>
                  <div className="flex-col w-fit flex items-center" onClick={()=>window.open("https://leetcode.com/u/himanshuone/", "_blank")}>
                    <img src={leet} alt="" className="size-20" />
                    <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                      leetcode
                    </div>
                  </div>

                  <div className="flex-col w-fit flex items-center" onClick={()=>window.open("https://www.hackerrank.com/profile/himanshuone")}>
                    <img src={hackerrank} alt="" className="size-20" />
                    <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                      hackerrank
                    </div>
                  </div>
                  <div className="flex-col w-fit flex items-center" onClick={()=>window.open("https://www.geeksforgeeks.org/profile/himanshuone")}>
                    <img src={gfg} alt="" className="size-20" />
                    <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                      Geeksforgeeks
                    </div>
                  </div>
                  
                </div>
               
              </div>

              <div className="flex flex-col  h-full w-full items-center mt-10">
                
                
                <div className="flex text-5xl mt-18 font-mono font-semibold  text-gray-600">
                  Social's
                </div>
                <div className="flex flex-col w-4/5 h-50 mt-12 gap-10">
                  <div className="flex justify-evenly w-full h-full">

                    <div className="flex-col w-fit flex items-center blur-xs cursor-wait" >
                    <CiLinkedin className="size-20" />
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Linkedin
                      </div>
                    </div>
                    <div className="flex-col w-fit flex items-center cursor-" onClick={()=> window.open("https://medium.com/@himanshuone", "_blank")}>
                        <FaMediumM className="size-20"/>
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Medium
                      </div>
                    </div>
                    <div className="flex-col w-fit flex items-center cursor-pointer  " onClick={()=> window.open("mailto:himanshucome1@gmail.com") }>
                    <BiLogoGmail className="size-20"/>
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Email
                      </div>
                    </div>

                    <div className="flex-col w-fit flex items-center blur-xs cursor-not-allowed " onClick={()=> window.open("https://www.freepik.com/free-photos-vectors/happy-cat", "_blank")}>
                    <CiInstagram className="size-20"/>
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Instagram
                      </div>
                    </div>
                    
                   
                  </div>

                  <div className="flex flex-col w-full h-fit">
                    <div className="flex text-5xl mt-18 font-mono font-semibold justify-center  text-gray-600">
                      Collaboration Form
                    </div>

                    <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col  mb-20 gap-10 mt-20 justify-center items-center">
                      <div className="flex justify-center items-center h-fit w-fit  rounded-4xl border-0">
                        <div className="rounded border p-5">
                          <form onSubmit={()=>console.log("done")} className="flex items-center" >
                           <div>
                             <input type="text"  placeholder="name" className="outline-none p-2 border-b-2"/>
                            <input type="email"  placeholder="email" className="outline-none p-2 border-b-2"/>
                            <textarea type="message"  placeholder="message: on what topic you want to collaborate" className="outline-none p-2 border-b-2"/>
                            </div>
                            <div><button type="submit" className="rounded-2xl bg-gray-700 text-gray-50 px-4 py-1">Submit</button></div>

                          </form>



                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center h-fit w-fit">
                        <div className="h-full w-full flex flex-col justify-center">
                          <div className="text-6xl font-semibold   text-[#ff7a05]">
                            Message
                          </div>
                          <div className="text-sm font-semibold flex justify-center  text-[#ff7a05]">
                            or collaborations on topic  
                          </div>

                          <div className="text-xl font-nunito font-extralight font-stretch-80% mt-2">
                            <ul className="list-disc">
                              <li>React Frontend</li>
                              <li>Express Backend</li>
                              <li>Django Backend</li>
                              <li>Big Cameras</li>
                              <li>Research on Hardwares</li>


                            </ul>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreModal;
