const JobCategory = ()=>{
    return(<>
    <div className="mt-10 font-semibold text-4xl text-center pb-[10px] text-mine-shaft-100">
        <div> Browse <span className="text-bright-sun-400">Job </span> category </div>
        <div className="text-xl mt-[8px] text-mine-shaft-300 font-normal">Explore different Job Categories</div>
    </div>

    <div className="flex flex-col items-center">
        <div className="bg-bright-sun-200 rounded-full">
            <img className="text-bright-sun-200 h-10 w-10" src="/Category/Digital Marketing.png" alt=""/>
        </div>
        <div className="text-mine-shaft-100 font-semibold text-lg">Digital Marketing</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis modi minima consequatur?</div>
        <div>1K+ Jobs posted</div>
    </div>
    </>
    )
};

export default JobCategory;