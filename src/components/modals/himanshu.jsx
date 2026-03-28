import React from "react";
import image from "../../assets/himanshu.pdf";
import { FaWindowClose } from "react-icons/fa";

function ProfileModal({ ResumeFun }) {
  return (
    <>
      <div className=" h-full fixed flex  justify-center items-center  ">
        <div className="flex flex-col overflow-hidden bg-white h-full w-auto rounded-2xl">
          <div className=" h-[8vh] w-full flex justify-between  items-center p-5  border-3 border-b-2 rounded-t-2xl border-black bg-[#646a45]">
            <div className=" text-xl font-stretch-110% text-gray-100">
              C:\himanshu\resume{" "}
            </div>

            <div
              className="  flex  hover:bg-red-700 text-white font-bold py-2 px-2 rounded "
              onClick={() => ResumeFun()}
            >
              <FaWindowClose className="text-yellow-200" size={20} />
            </div>
          </div>

          <div className="bg-[rgba(255,170,0,0.12)] relative border-x-2 rounded-x-2xl border-b-2 flex flex-col lg:flex-row xl:flex-row md:flex-col sm:flex-row rounded-b-2xl border-black h-full w-auto overflow-scroll">
            <div className="absolute flex top-0 left-0 right-0 justify-center  ">
              <button className="border-0 text-gray-200 mt-0.5 rounded px-2 bg-[#646a45] ">
                <a href={image} download>
                  download
                </a>
              </button>
            </div>

            <iframe
              src={`${image}#toolbar=0&navpanes=0&scrollbar=0`}
              alt="Resume"
              className=" min-w-70 w-200 h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
