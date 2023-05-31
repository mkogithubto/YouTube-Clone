import '../styles/categories.css'

const Categories = () => {

    let categories = [
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Fashion"},
        {link:"Vlogs"},
        {link:"Kids"},
        {link:"Movies"},
        {link:"Food"},
        {link:"Bollyword"},
        {link:"Recently Uploaded"}

    ]
    
    return ( 
        <div className="categories">
           <ul>
            {categories.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                )
            })}
           </ul>
        </div>
     );
}
 
export default Categories;