import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StaffMember = ({ portraitImage, firstName, lastName, role, socialMedia }) => {
    return (
        <div className="flex flex-col text-center rounded-lg bg-orange-400 shadow-lg">

            {/* Portrait image */}
            <div className="aspect-square overflow-hidden rounded-t-lg">
                <img src={portraitImage} alt={`${firstName} ${lastName}'s portrait image`} className="object-cover h-full w-full" />
            </div>

            {/* Personal info */}
            <div className="px-5 pb-5 flex flex-col gap-5">

                <div className="px-5 py-2.5 -mt-5 text-slate-800 rounded-2xl bg-white shadow-lg">
                    <h1 className="uppercase font-bold">{firstName} {lastName}</h1>
                    <p className="-pt-4">{role}</p>
                </div>
                
                <div className="flex justify-center gap-2">
                    {socialMedia.map(({ url, icon }) => (
                        <a href={url}>
                            <FontAwesomeIcon icon={icon} className="text-white hover:text-gray-100 transition-color duration-200" size="xl" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default StaffMember;