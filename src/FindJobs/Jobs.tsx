import { jobList } from "../Data/JobsData";
import Jobcard from "./JobCard";
import Sort from "./Sort";

const Jobs = ()=>{
    return(
        <div className="p-5">
            <div className="flex justify-between px-3">
                <div className="text-2xl font-semibold ">Recommened Jobs</div>
                <Sort/>
            </div>
            <div className="mt-5 flex justify-center">
                <div className="flex flex-wrap gap-5 mx-auto justify-center">
                {
                    jobList.map((job,index)=> <Jobcard key={index} {...job}/>)
                }
                </div>
            </div>
        </div>
    )
}

export default Jobs;