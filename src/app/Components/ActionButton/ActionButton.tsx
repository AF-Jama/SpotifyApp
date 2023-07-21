"use client"

import { MouseEvent } from "react";

type onClickFuncType = {
    (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void
}

interface Props{
    onClick?: (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)=>void,
    colorHex?:string,
    text:string
}

const ActionButton: React.FC<Props> = ({ colorHex, text, onClick })=>{





    return (
        <button className={`bg-[${colorHex}] rounded-md text-black text-xl py-2 px-12`} onClick={onClick}>{text}</button>
    )
}



export default ActionButton;