import { talents } from "../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents = ()=>{
return(<>
     <div className="p-5">
            <div className="flex justify-between px-3">
                <div className="text-2xl font-semibold ">Talents</div>
                <Sort/>
            </div>
            <div className="mt-5 flex w-[90%] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {
                        talents.map((data, index) => <TalentCard key={index} {...data} />)
                    }
                </div>
            </div>
        </div>
</>)
}

export default Talents;