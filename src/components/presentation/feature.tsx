import { Card, CardBody, Typography } from "@material-tailwind/react";
import CircleIcon from "../circleIcon";
import {
    ShoppingBagIcon,
    AcademicCapIcon,
    BookOpenIcon,
} from "@heroicons/react/24/solid";

function FeatureCard({ icon, title, children }) {
    return (
        <Card color="transparent" shadow={false}>
            <CardBody className="grid justify-center text-center">
                {icon}
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 !font-semibold"
                >
                    {title}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="px-8 font-normal text-gray-700"
                >
                    {children}
                </Typography>
            </CardBody>
        </Card>
    );
}

const features = [
    {
        icon: <CircleIcon icon={<BookOpenIcon fill="#3065fe" />} />,
        title: "For Students",
        description:
            "Declutter your dorm, sell what you no longer need, and find affordable pre-loved items right on campus.",
    },
    {
        icon: <CircleIcon icon={<AcademicCapIcon fill="#3065fe" />} />,
        title: "For Graduating Students",
        description:
            "Clear out your dorm, sell your books and appliances, and pass your stuff on to the next student — all in one trusted space.",
    },
    {
        icon: <CircleIcon icon={<ShoppingBagIcon fill="#3065fe" />} />,
        title: "For Entrepreneurs",
        description:
            "Kickstart your hustle — sell food, crafts, or offer services to fellow students without needing a complex setup.",
    },
];

export function FeatureLanding() {
    return (
        <section className="px-4 mt-12">
            <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3 ">
                {features.map(({ icon, title, description }) => (
                    <FeatureCard key={title} icon={icon} title={title}>
                        {description}
                    </FeatureCard>
                ))}
            </div>
        </section>
    );
}

export default FeatureLanding;
