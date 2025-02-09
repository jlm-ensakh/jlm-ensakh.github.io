import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StaffMemberV1 = ({ portraitImage, firstName, lastName, role, socialMedia }) => {
    return (
        <div className="flex flex-col text-center rounded-lg bg-white shadow">

            {/* Portrait image */}
            <div className="aspect-square overflow-hidden rounded-t-lg">
                <img src={portraitImage} alt={`${firstName} ${lastName}'s portrait image`} className="object-cover h-full w-full" />
            </div>

            {/* Personal info */}
            <div className="px-5 pb-5 flex flex-col gap-5">

                <div className="px-5 py-5 -mt-5 text-white rounded-2xl bg-orange-400 shadow-lg">
                    <h1 className="uppercase font-bold">{firstName} {lastName}</h1>
                    <p>{role}</p>
                </div>

                <div className="flex justify-center gap-2">
                    {socialMedia.map(({ url, icon }, idx) => (
                        <a key={idx} href={url}>
                            <FontAwesomeIcon icon={icon} className="text-orange-400 hover:text-orange-500 transition-color duration-200" size="xl" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}

const StaffMemberV2 = ({ portraitImage, firstName, lastName, role, socialMedia }) => {
    return (
        <div className="flex flex-col items-center gap-5">

            {/* Portrait image */}
            <div className="aspect-square max-w-48 overflow-hidden rounded-full border-5 border-white shadow-lg">
                <img src={portraitImage} alt={`${firstName} ${lastName}'s portrait image`} className="object-cover h-full w-full" />
            </div>

            {/* Personal info */}
            <div className="flex flex-col items-center text-center">
                <h1 className="uppercase font-bold">{firstName} {lastName}</h1>
                <p>{role}</p>
                <div className="mt-3 flex justify-center gap-2">
                    {socialMedia.map(({ url, icon }, idx) => (
                        <a key={idx} href={url}>
                            <FontAwesomeIcon icon={icon} className="text-orange-400 hover:text-orange-500 transition-color duration-200" size="xl" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}
const StaffMemberV3 = ({ portraitImage, firstName, lastName, role, socialMedia }) => {
    return (
        <div className="group relative aspect-[3/4] flex flex-col justify-end overflow-hidden rounded-lg shadow-lg bg-white">

            {/* Portrait image */}
            <div className="z-[0] absolute h-full w-full overflow-hidden rounded-lg">
                <img src={portraitImage} alt={`${firstName} ${lastName}'s portrait image`} className="object-cover h-full w-full rounded-lg" />
            </div>

            {/* Personal info */}
            <div className="z-[1] p-5 group-hover:grow flex flex-col justify-center items-center text-center transition-all duration-300 bg-orange-400/75 group-hover:bg-orange-400/90">
                <h1 className="uppercase font-bold text-white">{firstName} {lastName}</h1>
                <p className="text-white">{role}</p>
                <div className="mt-3 flex justify-center gap-2">
                    {socialMedia.map(({ url, icon }, idx) => (
                        <a key={idx} href={url}>
                            <FontAwesomeIcon icon={icon} className="text-white hover:text-gray-200 transition-color duration-200" size="xl" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}

export {
    StaffMemberV1,
    StaffMemberV2,
    StaffMemberV3
};