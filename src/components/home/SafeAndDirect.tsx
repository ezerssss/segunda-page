import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function SafeAndDirect() {
    return (
        <ThemeProvider>
            <div className="h-full w-screen place-items-center bg-white">
                <div className="container mx-auto grid items-center relative lg:grid-cols-2 px-8">
                    <div className="mb-8 text-center lg:text-left">
                        <Typography
                            color="blue"
                            className="flex items-center justify-center lg:justify-start font-bold text-lg mb-2 lg:mb-5"
                        >
                            Safe & Direct
                        </Typography>

                        <Typography
                            color="blue-gray"
                            className="mb-4 leading-tight text-[22px] md:text-[28px] lg:text-[36px] font-bold"
                        >
                            Verified users, safer transactions
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="text-sm md:text-base"
                        >
                            All users are verified through their university
                            email, ensuring real students, real listings, and
                            safer meetups across campus.
                        </Typography>
                    </div>
                    <div className="mx-auto w-full flex justify-center lg:justify-end">
                        <img
                            src="safe-direct.png"
                            alt="Safe and Direct"
                            className="w-[80%]"
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default SafeAndDirect;
