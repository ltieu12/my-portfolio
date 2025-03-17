import ProjectKeywords from "../ProjectKeywords";
import { Arrow } from "../Arrow";

const WebCard = ({title, description, projectBgColor, keywords, kwBgColor, imgSrc, videoSrc, prototypeLink, githubLink, isReverse}) => {
    return (
        <>
            {isReverse ? (
                <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
                    <div className="lg:w-1/2 text-left space-y-4">
                        <h3 className="text-3xl font-Clash font-semibold">{title}</h3>
                        <ProjectKeywords bgColor={kwBgColor} keywords={keywords} />
                        <p>{description}</p>
                        {prototypeLink && (
                            <>
                                <a href={prototypeLink} target="_blank" className="text-xl md:text-2xl pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit prototype
                                    <Arrow />
                                </a> 
                                <br />
                            </>
                        )}
                        {githubLink && (
                            <a href={githubLink} target="_blank" className="text-xl md:text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit GitHub
                                <Arrow />
                            </a>
                        )}
                    </div>

                    <div className="lg:w-1/2 lg:text-left space-y-5">
                        {videoSrc ? (
                            <div className={`${projectBgColor} px-5 md:px-7 pt-5 pb-8 md:pb-14 shadow-dark-shadow-lg-left lg:shadow-dark-shadow-lg border-3 border-black`}>
                                <video className="w-full h-full border-2 border-black rounded-xl shadow-[5px_6px_15px_rgba(0,0,0,0.5)]" autoPlay muted controls>
                                    <source src={videoSrc}></source>
                                    {title} run-through video  
                                </video>
                            </div>
                        ) : (
                            <div className={`${projectBgColor} max-w-max pl-3 pr-2 md:pl-5 md:pr-3 pt-3 shadow-dark-shadow-lg-left border-3 border-black`}>
                                <img src={imgSrc} alt={title}></img>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className='container mx-auto px-10 lg:px-24 mb-20 lg:mb-32 lg:flex lg:flex-row justify-between items-center gap-10'>
                    <div className="lg:max-w-1/2 lg:text-left space-y-5">
                        <div className={`${projectBgColor} max-w-max pl-3 pr-2 md:pl-5 md:pr-3 pt-3 shadow-dark-shadow-lg-left border-3 border-black`}>
                            <img src={imgSrc} alt={title}></img>
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-10 lg:mt-0 text-left space-y-4">
                        <h3 className="text-3xl font-Clash font-semibold">{title}</h3>
                        <ProjectKeywords bgColor={kwBgColor} keywords={keywords} />
                        <p>{description}</p>
                        {prototypeLink && (
                            <>
                                <a href={prototypeLink} target="_blank" className="text-xl md:text-2xl pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit prototype
                                    <Arrow />
                                </a> 
                                <br />
                            </>
                        )}
                        {githubLink && (
                            <a href={githubLink} target="_blank" className="text-xl md:text-2xl inline-block pt-5 inline-flex items-center gap-2 hover:underline" rel="noreferrer">Visit GitHub
                                <Arrow />
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );

}

export default WebCard;