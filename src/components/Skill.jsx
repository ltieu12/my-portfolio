const Skill = ({browserImgSrc, mobileImgSrc, altText}) => {
    return (
        <>
            <div className="md:hidden bg-white border-3 border-black rounded-3xl w-40 h-40 grid place-items-center">
                <img src={mobileImgSrc} alt={altText} />
            </div>

            <div className="hidden md:contents">
                <div className="bg-white md:border-3 md:border-black rounded-3xl w-48 h-48 grid place-items-center">
                    <img src={browserImgSrc} alt={altText} />
                </div>
            </div>
        </>
    );
}

export default Skill;