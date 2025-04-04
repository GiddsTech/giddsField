"use client"
import Link from "next/link" // Importing Link component for navigation
import React, { FC, useEffect, useState } from "react" // Importing React, functional component type, and hooks

import NavItems, { NavSocial } from "../components/NavItems" // Importing navigation items component
// import ThemeSwitcher from "../utils/ThemeSwitcher" // Importing theme switcher component
// Created component folder
// First file created and imported into page component

import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi" // Importing icons
import { useSelector } from "react-redux" // Importing useSelector to access Redux state
import Image from "next/image" // Importing Image component for optimized images

// import avatar from "@/public/assets/photo.jpeg" // Default avatar image
// import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi"
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"


// Header component for the app
const Header = () => {

    const [active, setActive] = useState(false) // State to control the sticky header

    const [openSidebar, setOpenSidebar] = useState(false) // State to control sidebar open/close

    const [open, setOpen] = useState(false);

    const [route, setRoute] = useState("")





    // Creating sticky header effect
    if (typeof window !== "undefined") { // Checking if running in the browser
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) { // If scrolled more than 80px
                setActive(true); // Set header to active (sticky)
            } else {
                setActive(false) // Remove active (sticky) state
            }
        })
    }

    // Function to handle sidebar close on click outside
    const handleClose = (e: any) => {
        if (e.target.id === "screen") { // Check if clicked outside the sidebar
            setOpenSidebar(false) // Close the sidebar
        }
    }

    const currentYear = new Date().getFullYear();


    return (
        <div className="w-full relative">
            <div className={`${active ? " fixed top-0 left-0 w-full h-[80px] z-[80] border-b  shadow-xl transition duration-500 bg-white" : "  w-full border-b  h-[80px] z-[80]"} border-b-primary`}>
                {/* Header container with conditional classes for sticky effect */}

                <div className="w-[95%] xl:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between  p-3 " >
                        {/* Flex container for logo and navigation items */}

                        <div id="header-link">
                            <Link href={"/"} // Logo link
                                className={"text-2xl font-bold sm:hidden md:hidden lg:hidden xl:hidden xl:text-base hover:text-red-900  text-blue-900 "}
                            >
                               GIDDSFIELD CARGO  LOGISTICS
                            </Link>

                            <Link href={"/"} // Logo link
                                className={"text-[20px] font-Poppins font-[500] text-blue-900  2xl:hidden xl:text-xs hover:text-red-900 "}
                            >
                                GIDDSFIELD  CARGO LOGISTICS

                            </Link>
                        </div>

                        <div id="nav-item">
                            <NavItems
                                isMobile={false} // Rendering for desktop
                            />
                            {/* <ThemeSwitcher /> Theme switcher button */}
                        </div>

                        <div id="navSocial-item">
                            <NavSocial isMobile={false} />
                        </div>

                        {/* Mobile menu icon, only visible on smaller screens */}
                        <div className="xl:hidden 2xl:hidden" id="menu-visible-in-smaller-screen">
                            <HiOutlineMenuAlt3
                                size={25}
                                className="cursor-pointer  text-primary"
                                onClick={() => setOpenSidebar(true)} // Opens sidebar on click
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile sidebar */}
                {
                    openSidebar && (
                        <div className="fixed w-full   top-0  left-0 z-[99999] "
id="mobile-sidebar-div"
                        >
                            <div
                                onClick={handleClose} // Handle close on click outside
                                id="screen"
                                className="w-[45%] fixed z-[999999999]   
                              bg-white
                            flex flex-col mt-[78px] h-[86%] justify-between
                            
                            sm:flex sm:justify-between sm:flex-col   top-0 right-0">

                                <NavItems isMobile={true} />
                                 {/* Mobile navigation items */}
                                <NavSocial isMobile={true} />
                                <p className='flex justify-center items-center sm:p-2.5  text-black' >Copyright &#169; {currentYear} </p>

                            </div>
                        </div>
                    )
                }
            </div>

            {/* Conditional rendering of modals based on current route */}




        </div>
    )
}

export default Header
