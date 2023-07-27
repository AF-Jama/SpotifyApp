/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['api.spotify.com','t.scdn.co','i.scdn.co','charts-images.scdn.co']
    },
    env:{
        NEXT_PUBLIC_CLIENT_ID:"b89e8f3f1e8f499ba6aeebb5ae18aa95",
        NEXT_PUBLIC_CLIENT_SECRET: "b8984074e21943e58c8102a6fe5b6e0b",
        NEXT_PUBLIC_REDIRECT_URI:"https://spotify-stats-iota.vercel.app/auth",
        NEXT_PUBLIC_STATE:7804729907486487,
        NEXT_PUBLIC_SCOPE:"ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public",
        BASE_URL:"https://api.spotify.com/v1",
        NEXT_PUBLIC_BASE_URL:"https://api.spotify.com/v1"
    }
}

module.exports = nextConfig
