





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
                <div className="flex text-5xl mt-8 font-mono font-semibold  text-gray-600">
                  LANGUAGE
                </div>
                <div className="flex-col  justify-center mt-10 space-y-3">
                  <div className=" flex gap-5 justify-center">
                    <div className="border-2 rounded-4xl px-10 py-1  flex justify-center bg-[#F1B679]  text-2xl font-stretch-75%">
                      C
                    </div>
                    <div className="border-2 rounded-4xl px-17 py-1  flex justify-center bg-[#646a45] text-gray-200 text-2xl font-stretch-75%">
                      JavaScript
                    </div>
                  </div>
                  <div className=" flex gap-5 justify-center">
                    <div className="border-2 rounded-4xl px-17 py-1  flex justify-center  bg-[#646a45] text-gray-200 text-2xl font-stretch-75%">
                      Python
                    </div>
                    <div className="border-2 rounded-4xl px-10 py-1  flex justify-center bg-[#F1B679]  text-2xl font-stretch-75%">
                      C++
                    </div>
                  </div>
                </div>
                <div className="flex text-5xl mt-18 font-mono font-semibold  text-gray-600">
                  TECH-STACKS
                </div>
                <div className="flex flex-col w-4/5 h-50 mt-12 gap-10">
                  <div className="flex justify-evenly w-full h-full">
                    <div className="flex-col w-fit flex items-center">
                      <SiExpress className="size-20" />

                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Express
                      </div>
                    </div>
                    <div className="flex-col w-fit flex items-center">
                      <img src={reactt} alt="" className="size-20" />
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        React
                      </div>
                    </div>

                    <div className="flex-col w-fit flex items-center">
                      <img src={django} alt="" className="size-20" />
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Django
                      </div>
                    </div>
                    <div className="flex-col w-fit flex items-center">
                      <SiTailwindcss className="size-20" />
                      <div className="flex justify-center items-center font-mono font-semibold text-gray-600 text-xl">
                        Tailwind
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full h-fit">
                    <div className="flex text-5xl mt-18 font-mono font-semibold justify-center  text-gray-600">
                      DEVELOPMENT
                    </div>

                    <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col  mb-20 gap-10 mt-20 justify-center items-center">
                      <div className="flex justify-center items-center h-fit w-fit  rounded-4xl border-0">
                        <img
                          src={application}
                          alt=""
                          className="min-w-100 w-180   rounded-3xl border"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center h-fit w-fit">
                        <div className="h-full w-full flex flex-col justify-center">
                          <div className="text-6xl font-semibold   text-[#ff7a05]">
                            iSeeThrough
                          </div>

                          <div className="text-xl font-nunito font-extralight font-stretch-80% mt-2">
                            I Built a website to Store Movies I have watched.
                            and it suggest u or remind u to watch a movie again
                            from watched list. multiple other user can also
                            store there list
                          </div>
                          <div className="flex w-full h-full  gap-10 justify-between mt-1 ">
                            <div className="rounded border px-3 bg-gray-700 text-gray-100 py-1">
                              <a
                                href="https://iseethrough.pythonanywhere.com/"
                                target="_blank"
                              >
                                IseeThrough
                              </a>
                            </div>
                            <div className="rounded-2xl border px-3 bg-gray-700 text-gray-100 py-1">
                              <a
                                href="https://github.com/himanshuone/django-movie-tracker"
                                target="_blank"
                              >
                                Github
                              </a>
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
      </div>
    </>
  );
}

export default MoreModal;
