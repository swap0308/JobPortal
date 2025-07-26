import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommenedTalent = ()=>{
    return(
        <>
            <div className="w-[30vw]">
                <div className="flex flex-col">
                    <div className="text-xl font-semibold mb-5">Recommended Talent</div>
                    <div className="flex flex-row md:flex-col gap-5 flex-wrap">
                        {talents.map((talent, index) => index < 4 && <TalentCard {...talent} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommenedTalent;