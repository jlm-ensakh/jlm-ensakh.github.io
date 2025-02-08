import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { STAFF_MEMBERS } from "../assets/HomePageData";
import SectionContainer from "../components/SectionContainer";

const HomePage = () => {
    return (
        <>
            <Header />

            {/* Why Join Us section | starts */}
            <SectionContainer >
                <div className="flex flex-col md:flex-row-reverse gap-5">

                    <div className="aspect-video md:aspect-auto flex overflow-hidden rounded-xl">
                        <img src="/header.jpg" alt="" className="object-cover h-full w-full" />
                    </div>

                    <div className="flex flex-col justify-center gap-5">
                        <h1 className="text-4xl text-orange-400 font-bold">Why Join Us ?</h1>
                        <div className="text-slate-700">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div>
                            <a href="#" className="inline-block py-2 px-4 text-center rounded text-white font-semibold bg-orange-400 hover:bg-orange-500">Become a member</a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Why Join Us section | ends */}

            {/* Staff Members section | starts */}
            <SectionContainer className="bg-slate-100">
                <h1 className="mb-10 text-center text-4xl text-slate-700 font-bold">Staff Members</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {STAFF_MEMBERS.map(({ portraitImage, firstName, lastName, role }, idx) => (

                        <div key={idx} className="flex items-center rounded-lg bg-white shadow-lg">

                            {/* Portrait image */}
                            <div className="aspect-[3/4] w-full max-w-38 overflow-hidden rounded-l-lg bg-gray-400">
                                <img src={portraitImage} alt={`${firstName} ${lastName}'s portrait image`} className="object-cover h-full w-full" />
                            </div>

                            {/* Personal info */}
                            <div className="p-5 w-auto flex flex-col gap-2.5">
                                <h1 className="flex flex-col text-lg text-slate-700 uppercase font-bold">
                                    <span>{firstName}</span>
                                    <span>{lastName}</span>
                                </h1>
                                <p>{role}</p>
                                <div className="flex gap-2">
                                    <a href="#"><FontAwesomeIcon icon={faLinkedin} className="text-orange-400 hover:text-orange-500 transition-color duration-200" size="xl" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="text-orange-400 hover:text-orange-500 transition-color duration-200" size="xl" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagramSquare} className="text-orange-400 hover:text-orange-500 transition-color duration-200" size="xl" /></a>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
            </SectionContainer>
            {/* Staff Members section | ends */}

            <Footer />
        </>
    );
}

export default HomePage;