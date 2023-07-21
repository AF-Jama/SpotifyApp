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
        
}


export default ServerSideProps;