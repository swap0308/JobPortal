import { Avatar, Rating } from "@mantine/core";
import avatar9 from '../Resources/avatar-9.png';
import { testimonials } from "../Data/Data";

const Testimonials = ()=>{
    return(
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold mb-5 text-mine-shaft-100">What <span className="text-bright-sun-400">User</span> says about us?</div>

           <div className="flex  justify-evenly">
            {testimonials.map((text,index)=>
                    <div className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                    <Avatar className="!h-14 !w-14" src={avatar9} alt="its avatar"/>
                        <div>
                            <div className="text-mine-shaft-200 font-semibold">{text.name}</div>
                            <Rating value={text.rating} readOnly fractions={2}></Rating>
                        </div>
                    </div>
                    <div className="text-xs text-mine-shaft-400 ">{text.testimonial}</div>
                    </div>
            )}
            </div>

        </div>
    )
}

export default Testimonials;