import React,{useState} from "react";
import SearchBar from "../Search";
import ArtistCard from "../ArtistCard";
import useFetch from "../../customHooks/useFetch";
import './ArtistSearch.css';


const ArtistSearch = (props)=>{
    const [query,setQuery] = useState(''); // set query state
    const { data,loading,error } = useFetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`);

    // const artist = data.artists.items[0]; // returns artist first index

    console.log(data);
    const image = data?.artists?.items[0]?.images[2]?.url; // returns artist image
    const name = data?.artists?.items[0]?.name; // returns artists name
    const genre = data?.artists.items[0]?.genres[0]; // returns artist genre
    const views = data?.artists.items[0]?.followers?.total; // returns artists views
    console.log(data);
    // console.log(views);
    // console.log(genre);
    // console.log(name);
    // console.log(image);

    const onSearchChange = (event)=>{
        event.preventDefault();

        setQuery(event.target.value)
    }

    const convert = n => {
        // triggered converts integer to truncated form
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };

    return (
        <div id="artist-search-container">
            <div className="input-group">
                <SearchBar onSearchChange = {onSearchChange}/>
            </div>

            {loading||error && 
                
            <div id="loading-container">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        
            }
            
            {(!data||data.artists.items.length===0) && <p>Cannot Find artist</p>}
            {/* {data && <ArtistCard name={}/>} */}
            {(data && data.artists.items.length!==0) && <ArtistCard image={image} name={name} genres={genre} views={convert(views)}/>}
        </div>
    )
}



export default ArtistSearch;