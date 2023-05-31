import YTLogo from '../images/YTLogo.png'
import Notification from '../images/Notification.png'
import AddVideo from '../images/AddVideo.png'
import '../styles/navbar.css'



function Navbar() {
    return(
        <div className="nav">
            <div classname="logo">
                <img width={150} src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search" />
            </div>
            <div className="userOptions">
                <img width={35} src={Notification} alt="" />
                <img width={35} src={AddVideo} alt="" />
             <div className="profile">
                <h3>M</h3>
             </div>
            </div>
        </div>
    )
}

export default Navbar;