import { FcOpenedFolder } from "react-icons/fc";
import { PiIdentificationBadgeFill } from "react-icons/pi";


function LeftBox({modal}) {
  return (
    <div className="justify-evenly flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-2/3">

    <div className=" flex flex-col ">

        <div className="flex flex-col items-center w-full h-1/2 mt-15" onDoubleClick={()=>modal()}>
            <PiIdentificationBadgeFill size={100} color="#7F815F"/>
            <div>Hello</div>

        </div>

        <div className="flex flex-col items-center w-full h-1/2" onDoubleClick={()=>modal()}>
            <FcOpenedFolder size={100} />
            <div>Hello</div>
        </div>


    </div>
    </div>
  );
}

export default LeftBox;