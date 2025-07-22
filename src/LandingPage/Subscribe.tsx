import { Button, TextInput } from "@mantine/core";

const Subscribe = ()=>{
   return(<>
        <div className="mt-20 bg-mine-shaft-900 mx-28 rounded-xl items-center flex py-3 justify-around justify-center">
            <div className="text-3xl w-2/5 text-center font-semibold mb-3 text-mine-shaft-100 items-center">Never wants to miss any <span className="text-bright-sun-400">JOB news?</span></div>
            <div className="flex gap-3 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
                <TextInput 
                    className="[&_input]:!text-mine-shaft-100 font-semibold" 
                    variant="unstyled" 
                    placeholder="@email.com">
                </TextInput>
                
                <Button className="!rounded-lg" color="brightSun.4" variant="filled">Subscribe</Button>
            </div> 
        </div>
        <div className="pb-12"></div>
   </>)
}

export default Subscribe;