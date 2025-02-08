import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="relative h-screen w-full flex flex-col">

            <Navbar />

            {/* Header Title and subtitle */}
            <div className="px-10 grow flex flex-col justify-center gap-4 text-center text-white shadow-white">
                <h1 className="text-5xl font-bold">Innovating for a Better Tomorrow.</h1>
                <h2 className="text-xl font">We are a student-led community tackling real-world challenges through creative solutions and technology.</h2>
            </div>

            {/* Header Background */}
            <div id="header-background" className="-z-10 absolute w-full h-full top-0 left-0">
                <div className="absolute w-full h-full bg-center bg-no-repeat bg-cover bg-[url(/header.jpg)]"></div>
            </div>

        </header>
    );
}

export default Header;