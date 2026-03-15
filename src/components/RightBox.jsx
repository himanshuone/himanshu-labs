import { FcOpenedFolder } from "react-icons/fc";
import { PiReadCvLogoDuotone } from "react-icons/pi";

import { PiIdentificationBadgeFill } from "react-icons/pi";
function RightBox({ MoreFun, ResumeFun }) {
  return (
    <>
      <div className="justify-evenly  flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-full ">
        <div className="flex flex-row xl:flex-col sm:flex-col md:flex-col lg:flex-col flex-2 justify-around sm:pt-80 md:pt-80 xl:pt-80 lg:pt-80">
          <div
            className="flex flex-col items-center w-full h-1/2"
            onDoubleClick={() => MoreFun()}
          >
            <FcOpenedFolder size={100} />
            <div className="font-stretch-125%">more</div>
          </div>

          <div
            className="flex flex-col  items-center w-full h-1/2"
            onDoubleClick={() => ResumeFun()}
          >
            <div>
              <PiReadCvLogoDuotone size={100} color="red" />
            </div>

            <div className="font-stretch-125%">resume</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBox;
