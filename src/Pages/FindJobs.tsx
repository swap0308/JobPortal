import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchJobs";
import Jobs from "../FindJobs/Jobs";

const FindJobs = ()=>{
    return(<>
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider mx="md"/>
            <SearchBar></SearchBar>
            <Divider mx="md"/>
            <Jobs/>
        </div>
    </>)
};

export default FindJobs;