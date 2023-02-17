import React, { useState } from "react";
import "./navbar.css";
import IonIcon from "@reacticons/ionicons";
import { NavLink } from "react-router-dom";

type Props = {
    isLoggedIn: boolean;
    userName: string;
    logout: () => void;
};

export default function Navbar({ isLoggedIn, userName, logout }: Props) {
    let Links = [
        { name: "Track", link: "/track" },
        { name: "Statistics", link: "/statistics" },
        { name: "Logout", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div
                className={`${
                    // If logged in shift supplyAlly to the side
                    isLoggedIn
                        ? "md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
                        : "flex justify-center bg-white py-4 md:px-10 px-7"
                }`}
            >
                <div className="flex items-center font-ibm">
                    <p className="flex flex-row text-black justify-center">
                        Supply<span className="ally">Ally</span>
                    </p>
                </div>
                {isLoggedIn && (
                    <div className="w-full ml-4 ">
                        {/* hides  */}
                        <div className="justify-between hidden sm:flex font-ibm">
                            <div className="flex">
                                <NavLink to="/track" className="mr-2">
                                    Track
                                </NavLink>
                                <NavLink to="/statistics">Statistics</NavLink>
                            </div>
                            <div className="flex font-ibm">
                                <div className="">
                                    👋🏻 Hi{" "}
                                    <span className="font-bold">
                                        {userName}
                                    </span>
                                </div>
                                <div className="h-6 border-r border-gray-300 mx-3"></div>
                                <button onClick={logout}>Logout</button>
                            </div>
                        </div>

                        <div
                            onClick={() => setOpen(!open)}
                            className="text-3xl absolute right-8 top-3 cursor-pointer sm:hidden"
                        >
                            <IonIcon name={open ? "close" : "menu"}></IonIcon>
                        </div>
                        <ul
                            className={`sm:hidden pb-4 absolute md:static bg-white z-[-1] left-0 w-full pl-6 transition-all duration-500 ease-in ${
                                open ? "top-10 " : "top-[-490px]"
                            }`}
                        >
                            {Links.map((link) => (
                                <li
                                    key={link.name}
                                    className="md:ml-8 text-xl md:my-0 my-7"
                                >
                                    {/* <a
                                        href={link.link}
                                        className="text-gray-800 hover:text-gray-400 duration-500"
                                    >
                                        {link.name}
                                    </a> */}
                                    {link.name !== "logout" ? (
                                        <NavLink to={link.link}>
                                            {link.name}
                                        </NavLink>
                                    ) : (
                                        <button onClick={logout}>
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

// import React, { useState } from "react";
// import "./navbar.css";
// import IonIcon from "@reacticons/ionicons";

// type Props = {
//     isLoggedIn: boolean;
//     userName: string;
// };

// export default function Navbar({ isLoggedIn, userName }: Props) {
//     let Links = [
//         { name: "Track", link: "/" },
//         { name: "Statistics", link: "/" },
//         { name: "Logout", link: "/" },
//     ];
//     let [open, setOpen] = useState(false);

//     return (
//         <div className="w-full top-0">
//             <div
//                 className={`${
//                     // If logged in shift supplyAlly to the side
//                     isLoggedIn
//                         ? "flex bg-white py-4 md:px-10 px-7"
//                         : "flex justify-center bg-white py-4 md:px-10 px-7"
//                 }`}
//             >
//                 <div className="">
//                     <p className="flex flex-row text-black ">
//                         Supply<span className="ally">Ally</span>
//                     </p>
//                 </div>
//                 {isLoggedIn && (
//                     <div className="w-full ml-4 ">
//                         <div className="flex justify-between hidden sm: block">
//                             <div className="flex">
//                                 <div>Track</div>
//                                 <div>Statistics</div>
//                             </div>
//                             <div className="flex">
//                                 <div>{`👋🏻 Hi ${userName}`}</div>
//                                 <div>Logout</div>
//                             </div>
//                         </div>

//                         <div
//                             onClick={() => setOpen(!open)}
//                             className="text-3xl absolute right-8 top-3 cursor-pointer sm:hidden"
//                         >
//                             <IonIcon name={open ? "close" : "menu"}></IonIcon>
//                         </div>
//                         <ul
//                             className={`sm:hidden pb-4 absolute md:static bg-white z-[-1] left-0 w-full pl-6 transition-all duration-500 ease-in ${
//                                 open ? "top-10 " : "top-[-490px]"
//                             }`}
//                         >
//                             {Links.map((link) => (
//                                 <li
//                                     key={link.name}
//                                     className="md:ml-8 text-xl md:my-0 my-7"
//                                 >
//                                     <a
//                                         href={link.link}
//                                         className="text-gray-800 hover:text-gray-400 duration-500"
//                                     >
//                                         {link.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
