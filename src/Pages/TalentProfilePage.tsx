import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import {profile} from '../Data/TalentData';
import RecommenedTalent from "../TalentProfile/RecommendedTalents";


const TalentProfilePage= ()=>{
    return(<>
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins] px-5">
           <Divider size="xs"></Divider>
           <Link className="my-5 inline-block" to="/find-talent">
                <Button color="brightSun.4" leftSection={<IconArrowLeft size={20}></IconArrowLeft>} variant="light">Back</Button>
           </Link>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                    <Profile  {...profile}/>
                </div>
                <RecommenedTalent/>
            </div>
        </div>
        </>)
}

export default TalentProfilePage;