import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
    return (
        <ThemeProvider>
            <header className="h-full w-screen place-items-center bg-white relative px-8 mb-8 pt-16">
                <div className="container mx-auto grid items-center gap-x-10 xl:gap-x-16 2xl:gap-x-32 lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <Typography
                            color="blue-gray"
                            className="mb-4 lg:mb-8 leading-tight font-black text-[30px] sm:text-[48px]"
                        >
                            The student marketplace built{" "}
                            <span className="text-blue">just for you</span>
                        </Typography>
                        <Typography className="text-[20px]" color="blue-gray">
                            Declutter your dorm, sell your textbooks, and score
                            great deals all on{" "}
                            <span className="font-bold">Segunda</span>. A
                            trusted, university-only marketplace built by
                            students, for students.
                        </Typography>
                        <div className="mt-6 sm:mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a href="#">
                                <Button
                                    color="dark"
                                    className="flex items-center"
                                >
                                    Download App
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center mt-6 sm:mt-12 lg:mt-0">
                        <img
                            src="header.png"
                            alt="components"
                            className="w-full"
                        />
                    </div>
                </div>
            </header>
        </ThemeProvider>
    );
}

export default HeroPresentation;
