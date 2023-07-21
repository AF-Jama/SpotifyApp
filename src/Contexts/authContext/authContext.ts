"use client"

import React, { Dispatch, createContext, SetStateAction } from "react";

interface Props{
    accessToken:string,
    setAccessToken: Dispatch<SetStateAction<string>>
}

export const authContext = createContext<Props>({
    accessToken:"",
    setAccessToken: (): string=>""
});