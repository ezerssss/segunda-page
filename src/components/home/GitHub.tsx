import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function GitHub() {
    return (
        <section className="py-8 px-8 lg:py-20">
            <div className="container mx-auto">
                <Card
                    color="blue"
                    shadow={false}
                    className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
                >
                    <CardBody className="py-20 px-4 sm:px-8 md:px-14 md:w-7/12">
                        <Typography
                            color="white"
                            className="font-normal opacity-70 text-sm md:text-base"
                        >
                            Open Source
                        </Typography>
                        <Typography
                            color="white"
                            className="mb-5 font-normal text-[28px] md:text-[36px]"
                        >
                            Contribute to improve Segunda!
                        </Typography>
                        <Typography
                            color="white"
                            className="text-[18px] md:text-[20px]"
                        >
                            Segunda is an open-source, student-first marketplace
                            built for campus communities and we’re open to
                            contributions from developers who believe in
                            student-led solutions.
                        </Typography>
                        <a
                            href="https://github.com/ezerssss/segunda"
                            target="_blank"
                        >
                            <Button
                                color="white"
                                size="sm"
                                variant="outlined"
                                className="flex items-center mt-5"
                            >
                                View Repository
                            </Button>
                        </a>
                    </CardBody>
                    <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
                        <img
                            src="github.png"
                            alt="github"
                            className="h-full w-full object-cover md:absolute"
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default GitHub;
