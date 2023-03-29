import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import "../header/header.scss"


const header = () => {
    const menu = [
        {
            id:1,
            name:"HOME",
            link: "/"
        },
        {
            id:2,
            name:"ALL PRODUCTS",
            link: "/allproducts"
        },
        {
            id:3,
            name:"ABOUT",
            link: "/about"
        },
        {
            id:4,
            name:"FAQ",
            link: "/faq"
        },
        {
            id:5,
            name:"BLOG",
            link: "/blog"
        },
    ]

    return(
        <header>
            <nav>
                <ul className="left-side">
                    {
                        menu?.map(i => {
                            return(
                                
                                <li key={i.id}>
                                    <Link to={i.link}>{i.name}</Link>
                                </li>
                            )
                        })  
                    }
                </ul>
                <div className="middle">
                <Link to="/home">
                    <img src={logo} alt='logo'/>
                </Link>
                </div>
                <div className="right-side">
                    <a href="#">UNITED STATES (USD $)</a>
                    <a href="#">LOG IN</a>
                    <a href="#">CART (0)</a>   
                </div>
            </nav>
        </header>
    )
}

    export default header