import {  useState } from "react";
import {  useEffect } from "react";
import '../styles/videos.css'





const Videos = () => {
    let [video,setVideo] = useState([])

    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:4000/videos')
            let data = await response.json()
            setVideo(data)

            let response1 = await fetch('http://localhost:4000/shorts')
            let data1 = await response1.json()
            setShorts(data1)
            
        }
        fetchData()
    },)

    let removeVideo = (id,channel) => {

        fetch(`http://localhost:4000/videos/${id}`,{
            method : 'DELETE'
        })
        alert(`${channel} video got Deleted `)
        // let result = video.filter((x)=> x.id!==id)
        // setVideo(result)
        // alert(`${channel} got deleted`)
    }

    
    
    let [shorts,setShorts] = useState([])
    return ( 
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videoData">
            {
                video.map((data)=>{
                    return(
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videoDetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                            </div>

                        </div>
                    )
                })
            }
           <div className="main">
           <h1>Shorts</h1>
            <div className="shortData">
                {
                    shorts.map((data)=>{
                        return(
                            <div className="short">
                                <img src={data.thumbnail} alt="" />
                                <div className="shortDetails">
                                    <h3>{data.title}</h3>
                                    <p>{data.views}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           </div>
            </div>

        </div>
        
     );
}
 
export default Videos;