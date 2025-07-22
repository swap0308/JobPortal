import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { link } from "fs";

const Footer = ()=>{
    return(<>
        <div className="flex justify-evenly bg-mine-shaft-900">
            <div className="mt-4 flex justify-around">
                <div className="w-1/4 flex flex-col gap-2">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <IconAnchor className="h-5 w-5"/>
                <div className="text-lg font-semibold">JobHook</div>
                </div>
                <div className="text-sm text-mine-shaft-300">Job portal with user profiles, skill updates, skill updates, xertifications, work experience and admin job postings.</div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:!bg-mine-shaft-700 [&>div]:!p-1.5 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:!bg-mine-shaft-500">
                    <div><IconBrandFacebook/></div>
                    <div><IconBrandInstagram/></div>
                    <div><IconBrandX/></div>
                </div>
            </div>
            {
                footerLinks.map((items,index)=> <div key={index} className="mb-3">
                    <div className="font-semibold text-lg text-bright-sun-400">{items.title}</div>
                    {
                        items.links.map((link,index)=> <div key={index} className="mb-1 text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
                    }
                </div>)
            }
            </div>
        </div>
    </>)
}

export default Footer;