import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_PAGES } from "../assets/HomePageData";

const Footer = () => {
    return (
        <footer className="bg-slate-900">

            <div className="p-5 mx-auto max-w-full md:max-w-4xl xl:max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-5">

                {/* Logos */}
                <div className="flex items-center gap-5">
                    <img src="/jlm_logo.svg" alt="" className="max-w-14 max-h-14" />
                    <img src="/ensa_logo.png" alt="" className="max-w-14 max-h-14" />
                    <img src="/usms_logo.svg" alt="" className="max-w-14 max-h-14" />
                </div>

                {/* Separating line (displayed only on small screens) */}
                <div className="sm:hidden w-full border-t border-slate-600"></div>

                {/* Scoial media icons */}
                <div className="flex gap-2">
                    {SOCIAL_MEDIA_PAGES.map(({url, icon}, idx) => (
                        <a key={idx} href={url}>
                            <FontAwesomeIcon icon={icon} className="text-white hover:text-gray-200 transition-color duration-200" size="xl" />
                        </a>
                    ))}
                </div>

            </div>

        </footer>
    );
}

export default Footer;