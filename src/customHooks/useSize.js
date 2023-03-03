import React,{useEffect, useState} from "react";


const useSize = ()=>{
    const [size,setSize] = useState(window.innerWidth);

    const resizeHandler = (event)=>{
        event.preventDefault();
        setSize(window.innerWidth);

    }

    useEffect(()=>{
        window.addEventListener('resize',resizeHandler)

        return ()=> window.removeEventListener('resize',resizeHandler);
    },[window.innerWidth]) // runs on initial render (on mount) and on dependency array change

    return {size} // return size representing viewport width
}


export default useSize;