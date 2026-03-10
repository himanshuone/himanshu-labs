import { FcOpenedFolder } from "react-icons/fc";
import { PiIdentificationBadgeFill } from "react-icons/pi";
function RightBox(){
    return (
    <>
    
      <div className="justify-evenly  flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-full ">
    
        <div className=" flex flex-col pt-80">
    
            
    
            <div className="flex items-center w-full h-1/2">
                <FcOpenedFolder size={100} />
                <span>Hello</span>
            </div>
            
            <div className="flex items-center w-full h-1/2">
                <FcOpenedFolder size={100} />
                <span>Hello</span>
            </div>
    
    
        </div>
        </div>
    </>
    )
}


export default RightBox;