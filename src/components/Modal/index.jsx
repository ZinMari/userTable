import { Button } from "../Button";

export function Modal({handlerClose, data}){

    return (
        <div onClick={handlerClose} className="fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10">
            <div className="relative bg-(--gray) rounded-lg min-h-[320px] max-w-[640px] mx-auto p-[10px]">
                <p>{`${data.lastName} ${data.firstName} ${data.maidenName}`}</p>
                <p>{`Age: ${data.age}`}</p>
                <p>{`Address:`}</p>
                <p>{`State: ${data.address.state}`}</p>
                <p>{`StateCode: ${data.address.stateCode}`}</p>
                <p>{`City: ${data.address.city}`}</p>
                <Button className={"absolute top-0 left-[calc(100%+10px)]"} handleClick={handlerClose}/>
            </div>
        </div>
    )
} 