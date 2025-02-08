import Header from "../components/Header";
import Footer from "../components/Footer";
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

            <Footer />
        </>
    );
}

export default HomePage;