import React from "react";

function ScrollAnimation() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center">
      <div className="w-5 h-10 border border-primary rounded-full flex items-start justify-center p-[2px]">
        <div className="w-1.5 h-1.5 border border-primary rounded-full animate-scroll-bounce [animation-duration:1.5s]"></div>
      </div>
    </div>
  );
}

export default ScrollAnimation;
