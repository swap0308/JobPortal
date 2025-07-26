import { IconBriefcase, IconMapPin } from '@tabler/icons-react';
import avatar from '../Resources/avatar-9.png';
import { Button, Divider } from '@mantine/core';
import ExpCard from './Expcard';
import Certicard from './CertiCard';


type Experience = {
    title: string;
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
};

type Certifications = {
    name: string
    issuer: string
    issueDate: string
    certificateId: string
}

type TalentPropsType = {
    name : string;
    role : string;
    company: string;
    location: string;
    about: string;
    skills: string[];
    experience: Experience[];
    certifications: Certifications[];
}

const Profile = ({
    name,
    role,
    company,
    location,
    about,
    skills,
    experience,
    certifications,
} : TalentPropsType)=>{
return(
    <div className="w-[66vw] mb-16">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="rounded-full h-40 w-40 top-24 absolute left-3 border-mine-shaft-950 border-8" src={avatar} alt="" />
        </div>
        <div className='px-3 mt-12'>
            <div className='text-2xl font-semibold flex justify-between'>{name}<Button color='brightSun.4' variant='light'>Message</Button></div>
            <div className='flex gap-2 items-center text-mine-shaft-300'> <IconBriefcase className='h-5 w-5'/> {role} &bull; {company}</div>
            <div className='flex gap-2 items-center text-mine-shaft-300'><IconMapPin className='h-5 w-5' stroke={1.5}/>{location}</div>
        </div>
        <Divider size="xs" my="xl" mx="xs"/>
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3'>About</div>
            <div className='text-sm text-mine-shaft-300 text-justify'>{about}</div>
        </div>
         <Divider size="xs" my="xl" mx="xs"/>
        <div className='px-3'>
            <div className='text-2xl font-semibold mb-3'>Skills</div>
            <div className='text-sm text-mine-shaft-300 text-justify flex flex-wrap gap-2'>
                {
                    skills.map((skill,index)=>
                     <div key={index} className='bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 font-semibold'>{skill}</div>)
                }
            </div>
        </div>
        <Divider size="xs" mt="xl" mx="xs"/>
        <div className='px-3 mt-7'>
            <div className='text-2xl font-semibold mb-3'>Experience</div>
            <ExpCard experience={experience}/>
        </div> 
        <div className='px-3 mt-7'>
            <div className='text-2xl font-semibold mb-3'>Certifications</div>
            <Certicard certification={certifications}/>
        </div>
    </div> 
)
};

export default Profile;