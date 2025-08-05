import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function SmartAndStructured() {
    return (
        <ThemeProvider>
            <div className="h-full w-screen place-items-center bg-white">
                <div className="container mx-auto grid items-center relative lg:grid-cols-2 px-8">
                    <div className="mx-auto w-full flex justify-center lg:justify-start order-2 lg:order-1">
                        <img
                            src="smart-structured.png"
                            alt="Smart and Structured"
                            className="w-[80%]"
                        />
                    </div>
                    <div className="mb-8 text-center lg:text-left order-1 lg:order-2">
                        <Typography
                            color="blue"
                            className="flex items-center justify-center lg:justify-start font-bold text-lg mb-2 lg:mb-5"
                        >
                            Smart & Structured
                        </Typography>

                        <Typography
                            color="blue-gray"
                            className="mb-4 leading-tight font-bold text-[22px] md:text-[28px] lg:text-[36px]"
                        >
                            Fair reservations with less friction
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="text-sm md:text-base"
                        >
                            With features like the Mine/Steal system, Segunda
                            helps buyers and sellers manage listings smoothly,
                            keeping things simple and stress-free.
                        </Typography>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default SmartAndStructured;
