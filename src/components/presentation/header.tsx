import { Button, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
    return (
        <ThemeProvider>
            <header className="h-full w-screen place-items-center bg-white relative px-8 pb-8 pt-16 lg:mb-16">
                <div className="container mx-auto grid items-center lg:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mb-8 lg:mr-32 leading-tight font-black"
                        >
                            The student marketplace built{" "}
                            <span className="text-blue">just for you</span>
                        </Typography>
                        <Typography
                            variant="lead"
                            color="blue-gray"
                            className="lg:pr-32"
                        >
                            Declutter your dorm, sell your textbooks, and score
                            great deals all on{" "}
                            <span className="font-bold">Segunda</span>. A
                            trusted, university-only marketplace built by
                            students, for students.
                        </Typography>
                        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a href="#pricing">
                                <Button
                                    color="dark"
                                    className="flex items-center"
                                >
                                    Download App
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center">
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
