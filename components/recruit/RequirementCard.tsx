interface RequirementProps {
    title: string;
    description: string;
}

const RequirementCard: React.FC<RequirementProps> = ({ title, description }) => {
    const descriptionLines = description.split('<br/>');

    return(
        <div className="flex flex-col bg-gray-80/50 w-[384px] h-[170px] px-[40px] py-[32px] gap-[16px] rounded-[16px] justify-center items-center text-center">
          <p className="text-gray-0 text-[20px] pad:text-[24px] font-light">{title}</p>
          <p className="text-gray-40 text-[16px] pad:text-[18px] font-extralight whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: description }}/>
        </div>
    );
}

export default RequirementCard;