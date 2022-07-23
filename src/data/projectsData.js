import loopstudio from "../assets/loopstudio.webp";
import splitter from "../assets/splitter.webp"
import todoapp from "../assets/todo-app.webp"
import vaccstat from "../assets/vaccstat.webp"
import youthden from "../assets/youthden.webp"
import snap from '../assets/snap.webp'
import { FaGithub } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';

export const projectsData = [
	{
        title: "loopstudio",
        desc: "A landing page challenge by Frontend Mentor built with HTML, Tailwind CSS, and Javascript",
        link: "https://arvene241.github.io/loop-studio-landing-page/",
        githublink: "https://github.com/arvene241/loop-studio-landing-page",
        img: loopstudio,
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
        title: "splitter",
        desc: "A tip calculator app built with HTML, SCSS, and Javascript that helps people to calculate the correct tip and total cost of the bill per person",
        link: "https://arvene241.github.io/tip-calculator-app/",
        githublink: "https://github.com/arvene241/tip-calculator-app",
        img: splitter,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "to-do list",
        desc: "A simple to-do list app built with HTML, CSS, and Javascript.",
        link: "https://arvene241.github.io/Todo-List/",
        githublink: "https://github.com/arvene241/Todo-List",
        img: todoapp,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "vaccstat",
        desc: "An app that enables fully vaccinated individuals to apply for a digital vaccination certificate. Built with React.js, Styled-Components, and Firebase.",
        link: "https://vaccstat.vercel.app/",
        githublink: "https://github.com/arvene241/VaccStat",
        img: vaccstat,
        github_icon: <FaGithub />,
        open_icon: <IoOpenOutline />
    },
    {
        title: "youth den apparel",
        desc: "An E-Commerce web application built with HTML, CSS/SCSS, Javascript, and PHP implements CRUD conditions.",
        link: "#",
        githublink: "https://github.com/arvene241/Youth-Den-Apparel",
        img: youthden,
        github_icon: <FaGithub />,
        open_icon: "",
    },
];