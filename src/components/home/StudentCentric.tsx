import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function StudentCentric() {
    return (
        <ThemeProvider>
            <div className="h-full w-screen place-items-center bg-white">
                <div className="container mx-auto grid items-center relative lg:grid-cols-2 px-8">
                    <div className="mb-8 text-center lg:text-left">
                        <Typography
                            color="blue"
                            className="flex items-center justify-center lg:justify-start font-bold text-lg mb-2 lg:mb-5"
                        >
                            Student-Centric
                        </Typography>

                        <Typography
                            color="blue-gray"
                            className="mb-4 leading-tight font-bold text-[22px] md:text-[28px] lg:text-[36px]"
                        >
                            A trusted marketplace made just for students
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="text-sm md:text-base"
                        >
                            Segunda gives students a familiar space to buy and
                            sell with a campus-exclusive network that feels like
                            social media, but works like a real marketplace.
                        </Typography>
                    </div>
                    <div className="mx-auto w-full flex justify-center lg:justify-end">
                        <img
                            src="student-centric.png"
                            alt="Student Centric"
                            className="w-[80%]"
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default StudentCentric;
