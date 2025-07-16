import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = ()=>{
    return(
        <>
            <div className="mt-20 font-semibold text-4xl text-center pb-[10px] text-mine-shaft-100">
                <div>Trusted by <span className="text-bright-sun-400">100+</span> companies</div>
            </div>
            <Marquee pauseOnHover={true}>
            {
                companies.map((company,index)=> <div key={index} className="px-[25px] py-[1px] hover:bg-mine-shaft-900 rounded-xl">
                    <img className="h-14" src={`/Companies/${company}.png`} alt={company}/>
                </div>)
            }
            </Marquee>
        </>
    )
}

export default Companies;