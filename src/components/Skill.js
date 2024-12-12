export default function Skill({imgSrc, altText}) {
    return (
        <>
           <div className="bg-white border-3 border-black rounded-3xl w-48 h-48 grid place-items-center">
                <img src={imgSrc} alt={altText} />
            </div> 
        </>
    );
}