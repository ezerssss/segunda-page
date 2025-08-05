import { Typography } from "@material-tailwind/react";

const COMPANY = [
    {
        name: "Privacy Policy",
        link: "https://www.termsfeed.com/live/a50f71c2-8e29-4e99-95b4-512d5e5090e6",
    },
    {
        name: "About Us",
        target: "_self",
        link: "/about",
    },
    {
        name: "Github",
        link: "https://github.com/ezerssss/segunda",
    },
];

const HELP = [
    {
        name: "Contact Us",
        link: "mailto:magbanuaezra@gmail.com",
    },
];

const TECHS = [
    {
        name: "React Native",
        link: "https://reactnative.dev",
    },

    {
        name: "Typescript",
        link: "https://www.typescriptlang.org",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com",
    },
    {
        name: "Algolia",
        link: "https://www.algolia.com",
    },
    {
        name: "Expo",
        link: "https://expo.dev",
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
                    <div className="ml-auto w-full md:w-1/2">
                        <div className="items-top mb-6 grid grid-cols-2 md:flex">
                            <div className="md:ml-auto pt-6 md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Technologies
                                </span>
                                <ul className="list-unstyled">
                                    {TECHS.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                target="_blank"
                                                href={link}
                                                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Company
                                </span>
                                <ul className="list-unstyled">
                                    {COMPANY.map(
                                        ({ name, link, target }, key) => (
                                            <li key={key}>
                                                <a
                                                    href={link}
                                                    target={target ?? "_blank"}
                                                    rel="noreferrer"
                                                    className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                                                >
                                                    {name}
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                            <div className="md:ml-auto pt-6 md:px-4 md:pt-0 xl:w-3/12 col-span-2">
                                <span className="text-md mb-4 block font-medium text-primary">
                                    Support
                                </span>
                                <ul className="list-unstyled">
                                    {HELP.map(({ name, link }, key) => (
                                        <li key={key}>
                                            <a
                                                href={link}
                                                rel="noreferrer"
                                                target="_blank"
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
