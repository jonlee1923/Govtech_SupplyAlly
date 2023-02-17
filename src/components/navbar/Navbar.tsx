import React, { useState } from "react";
import "./navbar.css";
import IonIcon from "@reacticons/ionicons";

type Props = {
    isLoggedIn: boolean;
    userName: string;
};

export default function Navbar({ isLoggedIn, userName }: Props) {
    let Links = [
        { name: "Track", link: "/" },
        { name: "Statistics", link: "/" },
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
                <div className="flex items-center">
                    <p className="flex flex-row text-black justify-center">
                        Supply<span className="ally">Ally</span>
                    </p>
                </div>
                {isLoggedIn && (
                    <div>
                        <div>
                            <div>
                                <div>Track</div>
                                <div>Statistics</div>
                            </div>
                            <div>
                                <div>{`👋🏻 Hi ${userName}`}</div>
                                <div>Logout</div>
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
                                    <a
                                        href={link.link}
                                        className="text-gray-800 hover:text-gray-400 duration-500"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
    // return (
    //     <nav className="bg-white flex justify-center md:justify-between p-4 w-full navbar">
    // <div className="flex items-center">
    //     <p className="flex flex-row text-black justify-center">
    //         Supply<span className="ally">Ally</span>
    //     </p>
    // </div>
    //         <div className="md:hidden ">
    //             <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200">
    //                 <svg
    //                     className="h-3 w-3"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                     {/* <title>Menu</title> */}
    //                     <path d="M0 0h20v2H0V0zm0 8h20v2H0V8zm0 8h20v2H0v-2z" />
    //                 </svg>
    //             </button>
    //         </div>
    //     </nav>
    // );
}
