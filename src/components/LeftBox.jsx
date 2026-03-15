import { FcOpenedFolder } from "react-icons/fc";
import { PiIdentificationBadgeFill } from "react-icons/pi";

function LeftBox({ modal, WorkFun }) {
  return (
    <div className="justify-evenly flex w-full xl:w-1/3 lg:w-1/3 md:1/3 sm:1/3 h-2/3">
      <div className="flex flex-row xl:flex-col sm:flex-col md:flex-col lg:flex-col flex-2 justify-around items-end">
        <div
          className="flex flex-col items-center w-full h-1/2 "
          onDoubleClick={() => modal()}
        >
          <PiIdentificationBadgeFill size={100} color="#7F815F" />
          <div className="font-stretch-125%">profile</div>
        </div>

        <div
          className="flex flex-col items-center w-full h-1/2"
          onDoubleClick={() => WorkFun()}
        >
          <FcOpenedFolder size={100} />
          <div className="font-stretch-125%">works</div>
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
