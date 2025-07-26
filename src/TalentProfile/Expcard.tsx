type ExperienceType = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type ExpCardProps = {
  experience: ExperienceType[];
};


const ExpCard = ({experience} : ExpCardProps)=>{
    return(
        <>
        {experience.map((exp, idx) => (
        <div key={idx} className="mb-5">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-mine-shaft-800 rounded-md">
                <img className="h-7" src={`/Icons/${exp.company}.png`} alt={exp.company} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">{exp.title}</div>
                <div className="text-sm text-mine-shaft-300">
                  {exp.company} &bull; {exp.location}
                </div>
              </div>
            </div>
            <div className="text-mine-shaft-300 text-sm">
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
          <div className="text-sm text-mine-shaft-300 text-justify mt-2">
            {exp.description}
          </div>
        </div>
      ))}
        </>
    )
}

export default ExpCard;