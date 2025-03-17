import ProjectKeywords from "../ProjectKeywords";
import { Arrow } from "../Arrow";

const MobileCard = ({title, description, projectBgColor, keywords, kwBgColor, imgSrc, mobilePrototypeLink, wearablePrototypeLink, isReverse}) => {
    return (
        <>
            {isReverse ? (
                <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 flex flex-col-reverse lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-10'>
                    <div className="lg:w-1/2 text-left space-y-4">
                        <h3 className="text-3xl font-Clash font-semibold">{title}</h3>
                        <ProjectKeywords bgColor={kwBgColor} keywords={keywords} />
                        <p>{description}</p>
                        <a href={mobilePrototypeLink} target="_blank" className="text-xl md:text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit mobile prototype
                            <Arrow />
                        </a>
                        <br />
                        {wearablePrototypeLink && (
                            <a href={wearablePrototypeLink} target="_blank" className="text-xl md:text-2xl inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit wearable prototype
                                <Arrow />
                            </a>
                        )}
                    </div>

                    <div className="lg:max-w-1/2 text-left space-y-5">
                        <div className={`bg-${projectBgColor} max-w-max px-3 md:px-5 py-4 shadow-dark-shadow-lg-left lg:shadow-dark-shadow-lg border-3 border-black`}>
                            <img src={imgSrc} alt={title}></img>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 lg:flex lg:flex-row justify-between items-center gap-10'>
                    <div className="lg:max-w-1/2 text-left space-y-5">
                        <div className={`bg-${projectBgColor} max-w-max px-3 md:px-5 pt-4 shadow-dark-shadow-lg-left border-3 border-black`}>
                            <img src={imgSrc} alt={title}></img>
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-10 lg:mt-0 text-left space-y-4">
                        <h3 className="text-3xl font-Clash font-semibold">{title}</h3>
                        <ProjectKeywords bgColor={kwBgColor} keywords={keywords} />
                        <p>{description}</p>
                        <a href={mobilePrototypeLink} target="_blank" className="text-xl md:text-2xl pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit mobile prototype
                            <Arrow />
                        </a>
                        <br />
                        {wearablePrototypeLink && (
                            <a href={wearablePrototypeLink} target="_blank" className="text-xl md:text-2xl inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit wearable prototype
                                <Arrow />
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileCard;