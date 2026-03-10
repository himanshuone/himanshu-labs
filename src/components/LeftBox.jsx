import { FcOpenedFolder } from "react-icons/fc";
import { PiIdentificationBadgeFill } from "react-icons/pi";


function LeftBox() {
  return (
    <div className="justify-evenly flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-2/3">

    <div className=" flex flex-col ">

        <div className="flex items-center w-full h-1/2">
            <PiIdentificationBadgeFill size={100} color="#ffd35e"/>
            <span>Hello</span>
        </div>

        <div className="flex items-center w-full h-1/2">
            <FcOpenedFolder size={100} />
            <span>Hello</span>
        </div>


    </div>
    </div>
  );
}

export default LeftBox;