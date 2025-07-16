import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSettings, IconAnchor} from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import avatar9 from '../Resources/avatar-9.png';

const Header = ()=>{
    return (
        <div className="w-full bg-black h-[10vh] text-white flex justify-between px-6 items-center bg-mine-shaft-950">
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconAnchor className="h-10 w-10"/>
                <div className="text-2xl font-semibold">JobHook</div>
            </div>
            
            <NavLinks></NavLinks>
           
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    <div>Name</div>
                    <Avatar src={avatar9} alt="it's me" />
                </div>

                <div className="bg-mine-shaft-800 rounded-full p-1.5">
                    <IconSettings stroke={1.5}/>
                </div>
                
                <div className="bg-mine-shaft-800 rounded-full p-1.5">
                <Indicator color="brightSun.3" processing offset={6} size={7}>
                    <IconBell stroke={1.5}/>
                </Indicator>
                </div>
            </div>
        </div>
    )
}

export default Header; 