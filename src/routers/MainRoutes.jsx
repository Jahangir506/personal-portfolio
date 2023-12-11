import { createBrowserRouter } from "react-router-dom";
import About from "../components/NavbarRoute/About/About";
import Contact from "../components/NavbarRoute/Contact/Contact";
import Projects from "../components/NavbarRoute/Projects/Projects";
import Skill from "../components/NavbarRoute/Skill/Skill";
import Study from "../components/NavbarRoute/Study/Study";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/skill',
                element: <Skill/>
            },
            {
                path: '/study',
                element: <Study/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])
export default router;