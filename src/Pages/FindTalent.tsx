import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";

const FindTalent = ()=>{
    return(<>
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins]">
            <Divider size="xs" mx="md"></Divider>
            <SearchBar/>
            <Divider size="xs" mx="md"></Divider>
            <Talents/>
        </div>
        </>)
}

export default FindTalent;