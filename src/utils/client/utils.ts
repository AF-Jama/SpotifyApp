export const onLoginClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();

    window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=token&state=${process.env.NEXT_PUBLIC_STATE}&scope=${process.env.NEXT_PUBLIC_SCOPE}`;
    console.log(process.env);
    return;
}