import React from "react";
import AuthLoading from '../Components/authLoading/AuthLoading';
import { Roboto } from "next/font/google";
import Image from "next/image";
import Spinner from '../../assets/images/spinner.svg';

const roboto = Roboto({
    weight:"400",
    subsets:['latin']
})


const Page: React.FC = ()=>{

    



    return (
        <div id="main-container" className="fixed inset-y-0 inset-x-0 bg-black flex flex-col justify-center ">
            <AuthLoading/>
        </div>   
    )
}



export default Page;