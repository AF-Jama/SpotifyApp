"use client"

import React from "react";
import ActionButton from "@/app/Components/ActionButton/ActionButton";
import { onLoginClick } from "@/utils/client/utils";


const SignInButton = ()=>{





    return (
        <ActionButton text="Sign In" onClick={onLoginClick} colorHex="#1DB954"/>
    )
}



export default SignInButton;