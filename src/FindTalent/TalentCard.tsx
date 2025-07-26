import { Avatar, Divider, Text, Button } from "@mantine/core";
import { IconMapPin, IconHeart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import avatar7 from '../Resources/avatar-7.png';
import avatar8 from '../Resources/avatar-8.png';
import avatar9 from '../Resources/avatar-9.png';

type TalentCardProps = {
    name: string;
    role: string;
    company : string;
    topSkills : string[];
    about : string;
    expectedCtc : string;
    image : string;
    location : string;
}

const TalentCard = (
    { name,
    role,
    company,
    topSkills,
    about, 
    expectedCtc,
    image,
    location
    } : TalentCardProps
)=>{

    const getImage = (image : string)=>{

        if(image === 'avatar-7')
        { return avatar7 };

        if(image === 'avatar-8')
        {
            return avatar8;
        }

        if(image === 'avatar-9')
        {
            return avatar9;
        }
    }

    return(<div className="bg-mine-shaft-900 rounded-md p-2 flex flex-col gap-3 hover:shadow-[0_0_5px_1px_black] !shadow-bright-sun-400 transition duration-500 ease-in-out">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                    <div className="border border-mine-shaft-700 p-1.5 rounded-full bg-mine-shaft-800">
                        <Avatar src={getImage(image)} size='md' alt="" />
                    </div>
                    <div className="text-sm">
                        <div className="font-semibold flex flex-wrap">{name}</div>
                        <div>{role} &#x2022; {company}</div>
                    </div>
                </div>
               <IconHeart className="text-mine-shaft-300 cursor-pointer"/>
            </div>
            <div className="flex gap-2 mt-2 [&>div]:py-1 [&>div]:px-2 [&>div]:text-bright-sun-400 [&>div]:bg-mine-shaft-800 [&>div]:text-xs [&>div]:rounded-lg ">
                {
                    topSkills.map((skill,index)=>
                        <div>{skill}</div>
                    )
                }
            </div>
            <Text className="!text-xs !text-mine-shaft-300 flex " lineClamp={3}>{about}</Text>
            <Divider size="md"/>
            <div className="flex justify-between text-xs">
                <div className="font-semibold !text-mine-shaft-200">{expectedCtc}</div>
                <div className="flex gap-1.5 items-center text-mine-shaft-400">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/>{location}
                </div>
            </div> 
            <Divider size="md"/>
            <div className="flex w-full justify-between gap-2">
                <Link  to= "/talent-profile" className="w-1/2">
                    <Button color="brightSun.4" variant="outline" fullWidth className="w-full">Profile</Button>
                </Link>
                    <div className="w-1/2">
                        <Button color="brightSun.4" variant="light" fullWidth className="w-full">Message</Button>
                    </div>
            </div>
        </div>
    )
}

export default TalentCard;