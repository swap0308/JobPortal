import { Carousel, CarouselSlide } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const JobCategory = ()=>{
    return(<>
    <div className="mt-10 font-semibold text-4xl text-center pb-[10px] text-mine-shaft-100">
        <div> Browse <span className="text-bright-sun-400">Job </span> category </div>
        <div className="text-xl mt-[8px] text-mine-shaft-300 font-normal">Explore different Job Categories</div>
    </div>

   <div className="px-auto mx-auto w-full">
     <Carousel className="mt-[10px] mx-auto [&_button]:hover:opacity-75 [&_button]:opacity-0 [&_button]:bg-bright-sun-400 hover:[&_button]:opacity-100 [&_button]:border-none" slideSize="20%" slideGap="md" emblaOptions={{ loop: true}} >
        {
            jobCategory.map((category,index)=>
            <CarouselSlide>
                    <div className="flex flex-col items-center gap-1 w-64 border-[1px] border-bright-sun-400 rounded-[6px] py-2 hover:cursor-pointer hover:shadow-[0_0_7px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-400 px-[4px]">
                        <div className="bg-bright-sun-400 rounded-[50%]">
                            <img className="text-bright-sun-200 h-10 w-10 p-[7px]" src={`/Category/${category.name}.png`} alt="" />
                        </div>
                        <div className="text-mine-shaft-100 font-semibold text-lg">{category.name}</div>
                        <div className="text-center  text-sm text-mine-shaft-400">{category.desc}</div>
                        <div className="text-bright-sun-300 text-sm">{category.jobs}+ new jobs posted</div>
                    </div>
            </CarouselSlide>)
        }
    </Carousel>
   </div>

    
    </>
    )
};

export default JobCategory;