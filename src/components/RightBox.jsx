import { FcOpenedFolder } from "react-icons/fc";
import { PiReadCvLogoDuotone } from "react-icons/pi";

import { PiIdentificationBadgeFill } from "react-icons/pi";
function RightBox(){
    return (
    <>
    
      <div className="justify-evenly  flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-full ">
    
        <div className=" flex flex-col pt-80">
    

    
            <div className="flex flex-col items-center w-full h-1/2" onDoubleClick={()=>console.log("Hello")}>
                <FcOpenedFolder size={100} />
                <div>Hello</div>
            </div>

            <div className="flex flex-col  items-center w-full h-1/2" onDoubleClick={()=>alert("Hello")}>
                <div><PiReadCvLogoDuotone size={100} color="red" /></div>

                <div className="">Resume</div>
            </div>
    
    
        </div>
        </div>
    </>
    )
}


export default RightBox;