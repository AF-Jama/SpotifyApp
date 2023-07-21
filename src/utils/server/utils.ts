import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export  const getAccessToken = ()=>{
    const cookieStore = cookies()

    let accessToken = cookieStore.get("access_token");

    if(!accessToken) redirect('/');

    return accessToken;
}