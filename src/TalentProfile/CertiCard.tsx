type CertificationType = {
    name: string
    issuer: string
    issueDate: string
    certificateId: string
}

type CertiCardProps = {
    certification : CertificationType[]
}

const Certicard = ({certification} : CertiCardProps)=>{
    return(<>
        {
            certification.map((cer,index)=>(
                <div key={index} className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-7" src={`/Icons/${cer.issuer}.png`} alt="" />
                    </div>
                    <div className=" flex flex-col gap-1">
                        <div className="font-semibold">{cer.name}</div>
                        <div className="text-sm text-mine-shaft-300"> {cer.issuer}</div>
                    </div>
                </div>
                <div className="[&>div]:text-mine-shaft-300 [&>div]:text-sm flex flex-col items-end">
                    <div>{cer.issueDate}</div>
                    <div>ID: {cer.certificateId}</div>
                </div>
            </div>
            ))
        }
    </>)
}

export default Certicard;