import {
    Card,
    CardHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
    img: string;
    name: string;
    desc: string;
}

function TeamCard({ img, name, desc }: TeamCardPropsType) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader
                floated={false}
                shadow={false}
                className="!m-0 !mb-6 h-64"
            >
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                />
            </CardHeader>
            <Typography variant="h4" color="blue-gray" className="mb-1">
                {name}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
                {desc}
            </Typography>
            <div className="flex items-center">
                <IconButton variant="text" color="light-blue">
                    <i className="fa-brands fa-twitter text-lg not-italic" />
                </IconButton>
                <IconButton variant="text" color="blue">
                    <i className="fa-brands fa-linkedin text-lg not-italic" />
                </IconButton>
                <IconButton variant="text" color="pink">
                    <i className="fa-brands fa-dribbble text-lg not-italic" />
                </IconButton>
            </div>
        </Card>
    );
}

const members = [
    {
        img: "https://avatar.iran.liara.run/public/92",
        name: "Ezra Magbanua",
        desc: "And I love you like Kanye loves Kanye. We need to restart that",
    },
    {
        img: "https://avatar.iran.liara.run/public/92",
        name: "Jhoanna Olana",
        desc: "Today you are you! That is truer than true! There is no one alive!",
    },
    {
        img: "https://avatar.iran.liara.run/public/92",
        name: "Rian Luis Mabait",
        desc: "Artist is a term applied to a person who engages in an activity",
    },
    {
        img: "https://avatar.iran.liara.run/public/92",
        name: "Andry Joseph Tumacole",
        desc: "Success is not final, failure is not fatal: it is the courage to continue",
    },
];

export function TeamSectionOne() {
    return (
        <section className="py-8 px-8 lg:py-16">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <Typography
                        color="dark"
                        className="mb-2 !font-semibold text-lg"
                    >
                        Our Team
                    </Typography>
                    <Typography variant="h2" color="blue-gray" className="mb-4">
                        Built by students, for students.
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
                    >
                        We’re a small team of university students passionate
                        about solving real problems on campus. Segunda was born
                        out of the cluttered Facebook groups and the need for
                        something better — a trusted, structured, and
                        student-first marketplace.
                    </Typography>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {members.map((props, key) => (
                        <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSectionOne;
