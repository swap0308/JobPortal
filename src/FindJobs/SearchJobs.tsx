import { Divider, RangeSlider, Slider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = ()=>{

    const [value,setValue] = useState<[number,number]>([20,80]);
    return(<>
    <div className="flex mx-4 my-8 ">
        {   dropdownData.map((data,index)=> <>
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