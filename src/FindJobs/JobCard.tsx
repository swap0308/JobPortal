import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";

type JobCardProps = {
    jobTitle : string;
    company : string;
    applicants : number;
    experience : string;
    jobType : string;
    location : string;
    Jobpackage : string;
    postedDaysAgo : number;
    description : string;
}

const Jobcard = ({
    jobTitle,
    company,
    applicants,
    experience,
    jobType,
    location,
    Jobpackage,
    postedDaysAgo,
    description
} : JobCardProps)=>{
    return(<div className="bg-mine-shaft-900 w-80 rounded-md p-2 flex flex-col gap-3 hover:shadow-[0_0_5px_1px_black] !shadow-bright-sun-400 transition duration-700 ease-in-out">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                    <div className="border border-mine-shaft-700 p-1.5 rounded bg-mine-shaft-800">
                        <img className="h-7" src={`/Icons/${company}.png`} alt="" />
                    </div>
                    <div className="text-sm">
                        <div className="font-semibold">{jobTitle}</div>
                        <div>{company} &#x2022; {applicants} Applicants</div>
                    </div>
                </div>
               <IconBookmark className="text-mine-shaft-300 cursor-pointer"/>
            </div>
            <div className="flex gap-2 mt-2 [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:bg-mine-shaft-800 [&>div]:text-xs [&>div]:rounded-lg ">
                <div>{experience}</div>
                <div>{jobType}</div>
                <div>{location}</div>
            </div>
            <Text className="!text-xs !text-mine-shaft-300 flex " lineClamp={3}>{description}</Text>
            <Divider size="md"/>
            <div className="flex justify-between text-xs">
                <div className="font-semibold !text-mine-shaft-200">&#8377; {Jobpackage}</div>
                <div className="flex gap-1.5 items-center text-mine-shaft-400">
                    <IconClockHour3 className="h-5 w-5" stroke={1.5}/> {postedDaysAgo} days ago
                </div>
            </div> 
        </div>
    )
}

export default Jobcard;