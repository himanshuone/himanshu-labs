import { useState, useEffect } from "react";

const WORD = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];

const dropAnimation = `
  @keyframes dropO {
    0%   { transform: translateY(0); }
    10%  { transform: translateY(-12px); }
    100% { transform: translateY(45vh); }
  }
  @keyframes bounceO {
    0%   { transform: translateY(15vh) scaleY(1); }
    15%  { transform: translateY(25vh) scaleY(0.7) scaleX(1.2); }
    30%  { transform: translateY(130px) scaleY(1.05); }
    50%  { transform: translateY(35vh) scaleY(0.88) scaleX(1.1); }
    65%  { transform: translateY(155px); }
    80%  { transform: translateY(45vh) scaleY(0.95); }
    100% { transform: translateY(5vh) scaleY(1) scaleX(1); }
  }
  @keyframes shadowAnim {
    0%   { transform: scaleX(0); opacity: 0; }
    100% { transform: scaleX(1); opacity: 0.25; }
  }
`;

function MainText() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  let oCount = 0;

  return (
    <>
      <style>{dropAnimation}</style>
      <div className="items-center flex justify-center h-full xl:h-full md:h-full sm:h-full lg:w-3/5">
        <h1
          className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-roboto font-extrabold font-stretch-125%
            text-[#7F815F] select-none
            [text-shadow:2px_2px_0_#fff,8px_8px_0_rgba(0,0,0,0.9)]
            xl:[text-shadow:2px_2px_0_#fff,10px_18px_0_rgba(0,0,0,0.9)]
            lg:[text-shadow:2px_2px_0_#fff,10px_18px_0_rgba(0,0,0,0.9)]
            md:[text-shadow:2px_2px_0_#fff,10px_10px_0_rgba(0,0,0,0.9)]
            sm:[text-shadow:2px_2px_0_#fff,8px_8px_0_rgba(0,0,0,0.9)]
            flex items-flex-start"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          {WORD.map((char, i) => {
            const isO = char === "O";
            const oIndex = isO ? oCount++ : -1;
            const dropDelay = oIndex * 0.18;

            const oStyle = started
              ? {
                  animation: `dropO 0.45s cubic-bezier(0.55,0,1,1) ${dropDelay}s forwards,
                               bounceO 0.6s ease ${dropDelay + 0.45}s forwards`,
                  transformOrigin: "bottom center",
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 10,
                }
              : {};

            const shadowStyle = started
              ? {
                  animation: `shadowAnim 0.2s ease ${dropDelay + 0.45}s forwards`,
                  opacity: 0,
                  width: "55%",
                  height: "8px",
                  background: "rgba(0,0,0,0.3)",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: "-188px",
                }
              : { display: "none" };

            return (
              <span
                key={i}
                style={
                  isO
                    ? { position: "relative", display: "inline-block", ...oStyle }
                    : {}
                }
              >
                {char}
                {isO && <span style={shadowStyle} />}
              </span>
            );
          })}
        </h1>
      </div>
    </>
  );
}

export default MainText;