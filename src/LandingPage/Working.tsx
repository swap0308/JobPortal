import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";
import avatar7 from '../Resources/avatar-7.png';

const Working = ()=>{
    return(
        <>
            <div className="mt-8 pb-5">
                <div className="font-semibold text-4xl text-center pb-[10px] text-mine-shaft-100">
                    <div> How it <span className="text-bright-sun-400">Works </span> </div>
                    <div className="text-xl mt-[4px] text-mine-shaft-300 font-normal">Get your new job with us</div>
                </div>
                <div className="flex justify-between items-center px-20">
                    <div className="relative">
                        <img className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
                        <div className="w-36 flex flex-col items-center gap-1 border rounded-xl py-1.5 border-bright-sun-400 absolute top-[18%] right-0 backdrop-blur-md">
                            <Avatar className="!h-16 !w-16" src={avatar7}/>
                            <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
                            <div className="text-xs text-mine-shaft-300">70% completed</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {
                            work.map((work,index)=>(
                            <div key={index} className="flex items-center gap-2">
                            <div className="rounded-full p-2.5 bg-bright-sun-400 h-14 w-14">
                                <img className="" src={`/Working/${work.name}.png`} alt="" />
                            </div>
                            <div>
                                <div className="text-mine-shaft-200 text-xl font-semibold">{work.name}</div>
                                <div className="text-mine-shaft-300 ">{work.desc}</div>
                            </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Working;
