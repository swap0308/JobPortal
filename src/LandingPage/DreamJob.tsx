import boyimage from '../Resources/Boy.png';
import { Avatar } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";
import avatar7 from '../Resources/avatar-7.png';
import avatar8 from '../Resources/avatar-8.png';
import avatar9 from '../Resources/avatar-9.png';
import googleimg from '../Resources/Google.png'

const DreamJob =()=>{
    return(
        <div className='flex items-center px-[30px] justify-between relative'>

            <div className='flex flex-col gap-5 w-[45%]'>
                <div className='text-6xl font-bold text-mine-shaft-200 leading-[1.10]'>Find your <span className='text-bright-sun-400'>dream job</span> with us</div>
                <div className='text-2xl text-mine-shaft-200'>Good life begins with a good company. Start exploring thousands of jobs in one place</div>
                <div className='flex gap-4 text-mine-shaft-100'>
                   
                    <TextInput className='text-mine-shaft-100 bg-mine-shaft-700 px-[10px] py-[2px] rounded-[10px] [&_input]:!text-mine-shaft-100' variant='unstyled' label="Job Title" placeholder='Software Engineer'></TextInput>
                    <TextInput className='text-mine-shaft-100 bg-mine-shaft-700 px-[10px] py-[2px] rounded-[10px] [&_input]:!text-mine-shaft-100' variant='unstyled' label="Job Type" placeholder='Fulltime'></TextInput>
                   
                    <div className='items-center justify-center flex w-20 bg-bright-sun-400 rounded-[10%] text-mine-shaft-100 hover:bg-bright-sun-500 cursor-pointer'>
                    <IconSearch className='h-[70%] w-[70%]'/>
                    </div>

                </div>
            </div>

            <div className='justify-center items-center flex '>
                <div className='w-[40rem] relative'>
                    <img src={boyimage} alt='bot-image'></img>
                    <div className='absolute w-fit top-[50%] right-4 border-bright-sun-400 border p-2 rounded-lg backdrop-blur-md'>
                        <div className='text-center text-mine-shaft-100 text-sm mb-[10px]'>5K+ got jobs </div>
                        <Avatar.Group>
                            <Avatar src={avatar7} />
                            <Avatar src={avatar8} />
                            <Avatar src={avatar9}/>
                            <Avatar>+5K</Avatar>
                        </Avatar.Group>
                        </div>
                    <div className='px-[6px] py-[4px] absolute w-fit top-[60%] left-4 border-bright-sun-400 gap-2 border p-2 rounded-lg backdrop-blur-md flex flex-col'>
                        <div className='flex gap-2 items-center '>
                            <div className='h-[40px] w-[40px] border rounded-[5px] bg-mine-shaft-900'>
                                <img src={googleimg} className='p-[5px]'/>
                            </div>
                            <div>
                                <div className='text-sm text-mine-shaft-100'>Software Engineer</div>
                                <div className='text-xs text-mine-shaft-200'>New York</div>
                            </div>
                        </div>

                        <div className='text-mine-shaft-200 text-xs flex justify-between'>
                            <span>1 day ago</span>
                            <span>120+ Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob;