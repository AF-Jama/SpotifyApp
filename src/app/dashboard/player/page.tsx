import React from "react";

interface Props{
    
}


const Page: React.FC<Props> = ()=>{






    return (
        <>

            <div id="player-state-container" className="flex flex-row justify-between fixed bottom-0 inset-x-0 border ml-14 px-3 py-5">
                <p className="text-white">1</p>
                <p className="text-white">2</p>
                <button className="btn-spotify text-white" >
                    &lt;&lt;
                </button>
            </div>
        
        </>
    )

}



export default Page;