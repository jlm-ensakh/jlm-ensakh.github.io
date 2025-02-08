import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {

    const NAV_MENU = [
        { label: "Home", target: "#" },
        { label: "Label 1", target: "#" },
        { label: "A Label", target: "#" },
        { label: "Join Us", target: "#", isButton: true }
    ]

    const [displayDropMenu, setDisplayDropMenu] = useState(false);

    return (
        <nav className="relative h-20 px-10 w-full shadow-md bg-white">
            <div className="py-4 mx-auto w-full max-w-screen-2xl h-20 flex justify-between items-center">

                {/* Logo and Title */}
                <Link to={'/'} className="h-full flex justify-center items-center gap-4">

                    <img src={"club_logo.svg"} className="h-full" />

                    <h1 className="flex flex-col">
                        <span className="font-bold">Jeunes Leaders Marocains</span>
                        <span>ENSA Khouribga</span>
                    </h1>

                </Link>

                {/* Drop-menu icon */}
                <button onClick={() => setDisplayDropMenu(!displayDropMenu)} className="block md:hidden cursor-pointer">
                    <FontAwesomeIcon icon={faBars} size="xl" className="text-gray-800" />
                </button>

                {/* Drop-menu */}
                {displayDropMenu && (
                    <div className="absolute block md:hidden top-20 left-0 w-full px-5 pb-5 flex flex-col gap-1 bg-white">
                        {NAV_MENU.map(({ label, target, isButton }, idx) => (
                            <a key={idx} href={target} className={`py-2 px-4 w-full text-center rounded ${isButton ? "text-white font-semibold bg-orange-400 hover:bg-orange-500" : "hover:bg-gray-100"}`}>{displayDropMenu}{label}</a>
                        ))}
                    </div>
                )}

                {/* Wide-screen menu */}
                <div className="hidden md:flex gap-2">
                    {NAV_MENU.map(({ label, target, isButton }, idx) => (
                        <a key={idx} href={target} className={`py-2 px-4 text-center rounded ${isButton ? "text-white font-semibold bg-orange-400 hover:bg-orange-500" : "hover:bg-gray-100"}`}>{label}</a>
                    ))}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;