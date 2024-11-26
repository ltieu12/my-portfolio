export const AboutPage = () => {
    return (
        <>
            <div className='container mx-auto px-20 mt-20 flex justify-between items-center'>
                <div className="md:w-1/2 md:text-left space-y-5">
                    <h1 className="text-5xl font-bold">Hi, I’m Lam!</h1>
                    <p className="text-lg">
                    I am a 4th year Computer Science student.<br />I code and design.
                    </p>
                </div>
                <img src="/Profile Pic.png" alt="Profile Pic"></img>
            </div>
        </>
    );
}