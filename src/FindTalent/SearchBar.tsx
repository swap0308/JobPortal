import { Divider, Input, RangeSlider, Slider } from "@mantine/core";
import { searchFields } from "../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { useState } from "react";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = ()=>{

    const [value,setValue] = useState<[number,number]>([20,80]);
    return(<>
    <div className="flex mx-4 my-8 ">
        <div className="flex items-center">
            <div className="text-bright-sun-400 bg-mine-shaft-800 rounded-full p-1 mr-2"><IconUserCircle size={25}/></div>
            <Input className="[&>input]:!placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name"/>
        </div>

            {searchFields.map((data,index)=> <>
                <div key={index} className="w-1/5 px-3"> 
                <MultiInput {...data}/>
            </div>
            <Divider orientation="vertical" size="xs"/>
            </>)
        }
        <div className="w-1/5 items-center mx-3 [&_.mantine-Slider-label]:!translate-y-12">
            <div className="flex justify-between text-sm">
                <div>Salary</div>
                <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider color="brightSun.4" value={value}  onChange={setValue} size="sm"/>
        </div>
    </div>
    </>)
}

export default SearchBar;