import { useState, useEffect } from "react";

export default function Skill({browserImgSrc, mobileImgSrc, altText}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // check to see the current screen size to add appropriate style
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <>
               <div className="bg-white border-3 border-black rounded-3xl w-40 h-40 grid place-items-center">
                    <img src={mobileImgSrc} alt={altText} />
                </div> 
            </>
        );
    }
    else {
        return (
            <>
               <div className="bg-white border-3 border-black rounded-3xl w-48 h-48 grid place-items-center">
                    <img src={browserImgSrc} alt={altText} />
                </div> 
            </>
        );
    }
}