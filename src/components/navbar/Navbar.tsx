import React, { useState } from "react";
import "./navbar.css";
import IonIcon from "@reacticons/ionicons";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {
    isLoggedIn: boolean;
    userName: string;
    logout: () => void;
};

export default function Navbar({ isLoggedIn, userName, logout }: Props) {
    let Links = [
        { name: "Track", link: "/track" },
        { name: "Statistics", link: "/statistics" },
    ];
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className="border-b w-full fixed">
            <div
                className={`${
                    // If logged in shift supplyAlly to the side
                    isLoggedIn
                        ? "sm:flex items-end justify-between bg-white py-5 md:px-10 px-4 sm:px-10"
                        : "flex justify-center bg-white py-4 sm:px-10 px-7"
                }`}
            >
                <div
                    className={`flex ${
                        isLoggedIn ? "justify-between" : "justify-center"
                    } items-center font-ibm`}
                >
                    <p className="flex flex-row text-black text-xl justify-center cursor-pointer" onClick={()=>{
                        setPage("")
                        navigate("/")
                    }} >
                        Supply<span className="ally">Ally</span>
                    </p>
                    {isLoggedIn && (
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex text-3xl cursor-pointer sm:hidden"
                        >
                            <IonIcon
                                data-cy="menuIcon"
                                data-testid="menuIcon"
                                name={open ? "close" : "menu"}
                            ></IonIcon>
                        </div>
                    )}
                </div>
                {isLoggedIn && (
                    <div
                        data-testid="loggedInElements"
                        data-cy="loggedInElements"
                        className="w-full ml-4"
                    >
                        {/* hides  */}
                        <div className="justify-between hidden sm:flex font-ibm">
                            <div className="flex">
                                {Links.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.link}
                                        className={`mr-2 ${
                                            link.name === page
                                                ? "text-priDefault"
                                                : "text-navbar"
                                        }`}
                                        data-cy={`${link.name}NavBtn`}
                                        onClick={() => {
                                            setPage(link.name);
                                        }}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="flex font-ibm">
                                <div className="">
                                    👋🏻 Hi{" "}
                                    <span
                                        className="font-bold"
                                        data-testid="navbarUsername"
                                        data-cy="navbarUsername"
                                    >
                                        {userName}
                                    </span>
                                </div>
                                <div className="h-6 border-r border-gray-300 mx-3"></div>
                                <button
                                    data-cy="logoutBtn"
                                    onClick={() => {
                                        logout();
                                        navigate("/");
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                        <ul
                            data-testid="menu"
                            data-cy="menu"
                            className={`sm:hidden mt-2 absolute sm:static bg-white z-[-1] left-0 w-full transition-all duration-450 ease-in drop-shadow-md ${
                                open ? "top-16" : "top-[-490px]"
                            }`}
                        >
                            <div className="border-t "></div>
                            {Links.map((link) => (
                                <li
                                    key={link.name}
                                    className=" text-xl pl-4 py-2"
                                >
                                    <button
                                        data-cy={`menu${link.name}Btn`}
                                        className={`flex w-full  ${
                                            page === link.name
                                                ? "text-priDefault"
                                                : "text-navbar"
                                        } `}
                                        onClick={() => {
                                            setPage(link.name);
                                            setOpen(!open);
                                            navigate(link.link);
                                        }}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                            <li className="pl-4 pt-2 pb-4 items-center text-xl border-t">
                                <button
                                    data-cy="menuLogoutBtn"
                                    className={"flex w-full text-navbar "}
                                    onClick={() => {
                                        logout();
                                        setOpen(!open);
                                        setPage("");
                                        navigate("/");
                                    }}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
