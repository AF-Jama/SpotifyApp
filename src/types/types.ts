type ServerSideProps = {
    accessToken?:string,
}; // defifining type of returned getServerSideProps data

export interface Categories{
    categories:{
        href:string,
        items:{
            href:string,
            id:string,
            name:string,
            icons: {
                height:number,
                url:string,
                width:number
            } []
        }[]
    }
}

export interface APIError{
    error:{
        status:number,
        message:string
    }
}

export interface SingleCategory{
    playlists:{
        href:string,
        items:{
            description:string,
            external_urls:{
                spotify:string,
            },
            href:string,
            id:string,
            name:string,
            tracks:{
                total:number,
            },
            images:{
                width:number,
                height:number,
                url:string,
            }[]
        }[],

    }
}

export interface SpotifyUser{
    country:string,
    display_name:string,
    email:string,
    images:{
        url:string,
        width:number,
        height:number,
    }[]

}

export interface Artist{
    artists:{
        href:string,
        items:{
            external_urls:{
                spotify:string,
            },
            followers:{
                total:number,
            },
            genres: Array<string>,
            images:{
                url:string,
                height:number,
                width:number,
            }[],
            name:string,
            popularity:number,
            type:string,
            uri:string,
        }[]
    }
}


export default ServerSideProps;