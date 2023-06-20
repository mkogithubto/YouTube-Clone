import '../styles/addvideo.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';




const AddVideo = () => {

    let navigate = useNavigate()


    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) =>{
        e.preventDefault()
        let data = {
            thumbnail : thumbnail.current.value,
            title : title.current.value,
            channel : channel.current.value,
            views : views.current.value 

            
        }
        fetch('http://localhost:4000/videos',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('Video Uploaded Successfully')
        navigate('/')
    }
    return ( 
        <div className="addVideo">
            <div className="image">
                <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?w=740&t=st=1686755864~exp=1686756464~hmac=9b72b552fef4793eb3187ddbcd73789f81cbc570b59c39e48c9910a789b44d2b" alt="" />
            </div>
            <div className="content">
                <div className="cont1">
                    <h1>Welcome to Youtube</h1>
                    <p>Common and create an account</p>
                </div>
           
            
                <div className="cont2">
                   <form action="" onSubmit={upload}>
                   <label htmlFor="">Thumbnail</label><br />
                    <input ref={thumbnail} type="text" /><br />
                   <label htmlFor="">Title</label><br />
                    <input ref={title} type="text" /><br />  
                   <label htmlFor="">Channel Name</label><br />
                    <input ref={channel} type="text" /> <br /> 
                   <label htmlFor="">Views</label><br />
                    <input ref={views} type="text" /><br />
                    <div className="btn">
                        <button>Add Video</button>    
                    </div>                  
                   </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddVideo;