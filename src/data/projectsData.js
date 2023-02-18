import dalle from "../assets/dall-e.webp";
import metaversus from "../assets/metaversus.webp"
import sneakers from "../assets/sneakers.webp"
import space from "../assets/space-tourism.webp"
import findtrend from "../assets/findtrend.webp"
import snap from '../assets/snap.webp'
import { FaGithub } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';

export const projectsData = [
    {
        title: "dall-e",
        desc: "Dall-E clone built with React.js, MongoDB, Express, Node, Typescript, Tailwind CSS, and OpenAI",
        link: "https://rai-dall-e.vercel.app/",
        githublink: "https://github.com/arvene241/dall-e",
        img: dalle,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "metaversus",
        desc: "A landing page built with React.js, Next.js and Tailwind CSS",
        link: "https://metaverseus.vercel.app/",
        githublink: "https://github.com/arvene241/metaverse_madness",
        img: metaversus,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "space tourism",
        desc: "A web app challenge by Frontend Mentor built with React.js, and Styled-Components",
        link: "https://space-tourismm.vercel.app/",
        githublink: "https://github.com/arvene241/space-tourism",
        img: space,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "snap",
        desc: "A landing page challenge by Frontend Mentor built with React.js, and Styled-Components",
        link: "https://snap-landing-page-nine.vercel.app/",
        githublink: "https://github.com/arvene241/snap-landing-page",
        img: snap,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "sneakers",
        desc: "A simple ecommerce product page built with React.js and Styled-Components.",
        link: "https://ecommerce-product-pagee.vercel.app/",
        githublink: "https://github.com/arvene241/ecommerce-product-page",
        img: sneakers,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
	{
        title: "findtrend",
        desc: "A landing page built with React.js and Styled-Components",
        link: "https://findtrend-five.vercel.app/",
        githublink: "https://github.com/arvene241/findtrend",
        img: findtrend,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
];