const ProjectKeywords = ({keywords, bgColor}) => {
    return (
        <div className="inline-flex items-center gap-4 pb-6">
            {keywords.map((keyword, index) =>
                <p className={`${bgColor} px-4 border-2 border-black rounded-lg`} key={index}>{keyword}</p>
            )}
        </div>
    );
}

export default ProjectKeywords;