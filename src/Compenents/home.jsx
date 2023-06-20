
import Bann from "./banner";
import Categories from "./categories";
import Videos from "./videos";


const Home = () => {
    return ( 
        <div className="home">
            <Categories/>
            <Bann/>
            <Videos/>
        </div>
     );
}
 
export default Home;
