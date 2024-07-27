import React, { useEffect, useRef } from 'react';

import HtmlIcon from "./icons/technologies/Html.astro";
import CssIcon from "./icons/technologies/Css.astro";
import JsIcon from "./icons/technologies/JavaScript.astro";
import TailwindIcon from "./icons/technologies/Tailwind.astro";
import ReactIcon from "./icons/technologies/React.astro";
import BootstrapIcon from "./icons/technologies/Bootstrap.astro";
import FigmaIcon from "./icons/technologies/Figma.astro";
import NextIcon from "./icons/technologies/Next.astro";
import AstroIcon from "./icons/technologies/Astro.astro";
import ExpressIcon from "./icons/technologies/Express.astro";
import NodeIcon from "./icons/technologies/Node.astro";
import MysqlIcon from "./icons/technologies/MySql.astro";
import MongoIcon from "./icons/technologies/Mongo.astro";
import VsCodeIcon from "./icons/technologies/VsCode.astro";
import TerminalIcon from "./icons/technologies/Terminal.astro";
import GitHubIcon from "../components/icons/GitHub.astro";
import AwsIcon from "./icons/technologies/Aws.astro";
import DockerIcon from "./icons/technologies/Docker.astro";


// const SkillsTable = () => {
//     const skillsTableWrapperRef = useRef(null);
//     const gradientOverlayRef = useRef(null);
//     const arrowIndicatorRef = useRef(null);

//     useEffect(() => {
//         const skillsTableWrapper = skillsTableWrapperRef.current;
//         const gradientOverlay = gradientOverlayRef.current;
//         const arrowIndicator = arrowIndicatorRef.current;

//         const checkScroll = () => {
//             const maxScrollLeft = skillsTableWrapper.scrollWidth - skillsTableWrapper.clientWidth;

//             if (skillsTableWrapper.scrollLeft >= maxScrollLeft - 10) {
//                 gradientOverlay.style.display = 'none';
//                 arrowIndicator.style.display = 'none';
//             } else {
//                 gradientOverlay.style.display = 'block';
//                 arrowIndicator.style.display = 'block';
//             }
//         };

//         checkScroll();
//         skillsTableWrapper.addEventListener('scroll', checkScroll);
//         window.addEventListener('resize', checkScroll);

//         return () => {
//             skillsTableWrapper.removeEventListener('scroll', checkScroll);
//             window.removeEventListener('resize', checkScroll);
//         };
//     }, []);

//     return (
//         <div ref={skillsTableWrapperRef} className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <tbody>
//                     <tr class="bg-gray-50 dark:bg-gray-800">
//                         <th
//                             scope="row"
//                             class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
//                             rowspan="2"
//                         >
//                             Frontend
//                         </th>
//                         <td class="px-6 py-4 text-sm">
//                             <HtmlIcon class="size-7 mb-1" />
//                             HTML
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <CssIcon class="size-7 mb-1" />
//                             CSS
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <JsIcon class="size-7 mb-1" />
//                             JavaScript
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <ReactIcon class="size-7 mb-1" />
//                             React
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <NextIcon class="size-7 mb-1" />
//                             Next.Js
//                         </td>

//                         <td class="px-6 py-4 text-sm">
//                             <AstroIcon class="size-7 mb-1" />
//                             Astro
//                         </td>
//                     </tr>
//                     <tr
//                         class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
//                     >
//                         <td class="px-6 py-4 text-sm">
//                             <TailwindIcon class="size-7 mb-1" />
//                             Tailwind
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <BootstrapIcon class="size-7 mb-1" />
//                             Bootstrap
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <FigmaIcon class="size-7 mb-1" />
//                             Figma
//                         </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                     </tr>
//                     <tr
//                         class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
//                     >
//                         <th
//                             scope="row"
//                             class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
//                         >
//                             Backend
//                         </th>
//                         <td class="px-6 py-4 text-sm">
//                             <NodeIcon class="size-7 mb-1" />
//                             nodeJs
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <ExpressIcon class="size-7 mb-1" />
//                             Express
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <MysqlIcon class="size-7 mb-1" />
//                             MySQL
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <MongoIcon class="size-7 mb-1" />
//                             MongoDB
//                         </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                     </tr>
//                     <tr class="bg-gray-50 dark:bg-gray-800">
//                         <th
//                             scope="row"
//                             class="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
//                         >
//                             Herramientas
//                         </th>
//                         <td class="px-6 py-4 text-sm">
//                             <VsCodeIcon class="size-7 mb-1" />
//                             VsCode
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <TerminalIcon class="size-7 mb-1" />
//                             Terminal
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <GitHubIcon class="size-7 mb-1" />
//                             Github
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <AwsIcon class="size-7 mb-1" />
//                             AWS
//                         </td>
//                         <td class="px-6 py-4 text-sm">
//                             <DockerIcon class="size-7 mb-1" />
//                             Docker
//                         </td>
//                         <td class="px-6 py-4 text-sm"> </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <div
//                 ref={gradientOverlayRef}
//                 className="gradient-overlay absolute top-0 right-0 h-full w-8 pointer-events-none bg-gradient-to-l from-white via-white"
//             ></div>
//             <div
//                 ref={arrowIndicatorRef}
//                 className="arrow-indicator absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
//             >
//                 <svg
//                     className="w-6 h-6 text-gray-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default SkillsTable;



const ScrollIndicator = () => {
    const skillsTableWrapperRef = useRef(null);
    const gradientOverlayRef = useRef(null);
    const arrowIndicatorRef = useRef(null);

    useEffect(() => {
        const skillsTableWrapper = skillsTableWrapperRef.current;
        const gradientOverlay = gradientOverlayRef.current;
        const arrowIndicator = arrowIndicatorRef.current;

        const checkScroll = () => {
            const maxScrollLeft = skillsTableWrapper.scrollWidth - skillsTableWrapper.clientWidth;

            if (skillsTableWrapper.scrollLeft >= maxScrollLeft - 10) {
                gradientOverlay.style.display = 'none';
                arrowIndicator.style.display = 'none';
            } else {
                gradientOverlay.style.display = 'block';
                arrowIndicator.style.display = 'block';
            }
        };

        checkScroll();
        skillsTableWrapper.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        return () => {
            skillsTableWrapper.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    return (
        <div ref={skillsTableWrapperRef} className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    {/* <tr className="bg-gray-50 dark:bg-gray-800">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                            rowspan="2"
                        >
                            Frontend
                        </th>
                        <td className="px-6 py-4 text-sm">
                            <HtmlIcon className="size-7 mb-1" />
                            HTML
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <CssIcon className="size-7 mb-1" />
                            CSS
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <JsIcon className="size-7 mb-1" />
                            JavaScript
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <ReactIcon className="size-7 mb-1" />
                            React
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <NextIcon className="size-7 mb-1" />
                            Next.Js
                        </td>

                        <td className="px-6 py-4 text-sm">
                            <AstroIcon className="size-7 mb-1" />
                            Astro
                        </td>
                    </tr>
                    <tr
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <td className="px-6 py-4 text-sm">
                            <TailwindIcon className="size-7 mb-1" />
                            Tailwind
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <BootstrapIcon className="size-7 mb-1" />
                            Bootstrap
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <FigmaIcon className="size-7 mb-1" />
                            Figma
                        </td>
                        <td className="px-6 py-4 text-sm"> </td>
                        <td className="px-6 py-4 text-sm"> </td>
                        <td className="px-6 py-4 text-sm"> </td>
                    </tr>
                    <tr
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Backend
                        </th>
                        <td className="px-6 py-4 text-sm">
                            <NodeIcon className="size-7 mb-1" />
                            nodeJs
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <ExpressIcon className="size-7 mb-1" />
                            Express
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <MysqlIcon className="size-7 mb-1" />
                            MySQL
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <MongoIcon className="size-7 mb-1" />
                            MongoDB
                        </td>
                        <td className="px-6 py-4 text-sm"> </td>
                        <td className="px-6 py-4 text-sm"> </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Herramientas
                        </th>
                        <td className="px-6 py-4 text-sm">
                            <VsCodeIcon className="size-7 mb-1" />
                            VsCode
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <TerminalIcon className="size-7 mb-1" />
                            Terminal
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <GitHubIcon className="size-7 mb-1" />
                            Github
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <AwsIcon className="size-7 mb-1" />
                            AWS
                        </td>
                        <td className="px-6 py-4 text-sm">
                            <DockerIcon className="size-7 mb-1" />
                            Docker
                        </td>
                        <td className="px-6 py-4 text-sm"> </td>
                    </tr> */}
                </tbody>
            </table>
            <div
                ref={gradientOverlayRef}
                className="gradient-overlay absolute top-0 right-0 h-full w-8 pointer-events-none bg-gradient-to-l from-white via-white"
            ></div>
            <div
                ref={arrowIndicatorRef}
                className="arrow-indicator absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
            >
                <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    );
};

export default ScrollIndicator;
