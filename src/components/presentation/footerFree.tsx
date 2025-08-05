import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const COMPANY = [
    {
        name: "Privacy Policy",
        link: "https://www.creative-tim.com/templates/free?ref=astrolaunch-ui",
    },
    {
        name: "About Us",
        link: "https://www.creative-tim.com/presentation?ref=astrolaunch-ui",
    },
    {
        name: "Github",
        link: "https://github.com/creativetimofficial?ref=astrolaunch-ui",
    },
];

const HELP = [
    {
        name: "Contact Us",
        link: "https://www.creative-tim.com/contact-us?ref=astrolaunch-ui",
    },
];

const TECHS = [
    {
        name: "React Native",
        link: "#",
    },

    {
        name: "Typescript",
        link: "#",
    },
    {
        name: "Firebase",
        link: "#",
    },
    {
        name: "Algolia",
        link: "#",
    },
    {
        name: "Expo",
        link: "#",
    },
];

export function Footer() {
    return (
        <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-4/12">
                        <Typography
                            variant="h4"
                            className="mb-2 !font-semibold !text-primary"
                        >
                            Segunda
                        </Typography>
                        <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
                            Mine it. Steal it. Sell it.
                        </Typography>
                    </div>
                    <div className="ml-auto w-full px-4 md:w-1/2">
                        <div className="items-top mb-6 flex flex-wrap">
                            <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Technologies
                                </span>
                                <ul className="list-unstyled">
                                    {TECHS.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Company
                                </span>
                                <ul className="list-unstyled">
                                    {COMPANY.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Help and Support
                                </span>
                                <ul className="list-unstyled">
                                    {HELP.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                rel="noreferrer"
                                                target={
                                                    name === "Pricing"
                                                        ? "_self"
                                                        : "_blank"
                                                }
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
