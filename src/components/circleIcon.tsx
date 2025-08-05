import React, { type ReactNode } from "react";

interface PropsInterface {
    icon: ReactNode;
}

function CircleIcon({ icon }: PropsInterface) {
    return (
        <div className="w-32 h-32 mx-auto mb-4 p-2 flex items-center justify-center relative">
            <div className="w-full h-full absolute grid grid-rows-3 grid-cols-3 z-30 opacity-30">
                <div className="border-[1px] border-[#b2c5ff] border-l-0 border-t-0" />
                <div className="border-[1px] border-[#b2c5ff] border-t-0" />
                <div className="border-[1px] border-[#b2c5ff] border-r-0 border-t-0" />
                <div className="border-[1px] border-[#b2c5ff] border-l-0" />
                <div className="border-[1px] border-[#b2c5ff]" />
                <div className="border-[1px] border-[#b2c5ff] border-r-0" />
                <div className="border-[1px] border-[#b2c5ff] border-l-0 border-b-0" />
                <div className="border-[1px] border-[#b2c5ff] border-b-0" />
                <div className="border-[1px] border-[#b2c5ff] border-r-0 border-b-0" />
            </div>
            <div className="w-full h-full rounded-full relative bg-[#e9efff] p-7">
                <div className="z-40 relative">{icon}</div>
                <div className="aspect-square w-[90%] absolute rounded-full top-1/2 left-1/2 bg-[#cfdbff] transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-[#b4c7ff]" />
                <div className="aspect-square w-[70%] absolute rounded-full top-1/2 left-1/2 bg-[#cfdbff] transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-[#b4c7ff]" />
            </div>
        </div>
    );
}

export default CircleIcon;
