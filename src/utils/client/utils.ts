export const onLoginClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();

    window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=token&state=${process.env.NEXT_PUBLIC_STATE}&scope=ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing user-top-read app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public`;
    console.log(process.env);
    return;
}

export const nFormatter = (num:number, digits:number)=> {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }