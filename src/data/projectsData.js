import dalle from "../assets/dall-e.webp";
import rainime from "../assets/rainime.webp"
import sneakers from "../assets/sneakers.webp"
import space from "../assets/space-tourism.webp"
import shortyqr from "../assets/Shortyqr.webp"
import dictionary from '../assets/dictionary.webp'
import { FaGithub } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';

export const projectsData = [
    {
        title: "rainime",
        desc: "Anime streaming site built with Next.js, Tailwind CSS, Typescript and Consumet API",
        link: "https://rainimee.vercel.app/",
        githublink: "https://github.com/arvene241/rainime",
        img: rainime,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
	{
        title: "shortyqr",
        desc: "Shortyqr is an dynamic short URL and QR code generator inspired by dub. Built with Next.js, Tailwind CSS, and Typescript",
        link: "https://shortyqr.vercel.app/",
        githublink: "https://github.com/arvene241/shortyqr",
        img: shortyqr,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
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
        title: "dictionary",
        desc: "A web app using the Dictionary API built with React.js and Tailwind CSS",
        link: "https://dictionary-arvene241.vercel.app/",
        githublink: "https://github.com/arvene241/dictionary",
        img: dictionary,
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
        title: "sneakers",
        desc: "A simple ecommerce product page built with React.js and Styled-Components.",
        link: "https://ecommerce-product-pagee.vercel.app/",
        githublink: "https://github.com/arvene241/ecommerce-product-page",
        img: sneakers,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
];