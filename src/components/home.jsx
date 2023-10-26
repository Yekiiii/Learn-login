import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div id="home-page">
            <h1>Home Page</h1>
            <Link to="/login">Click this</Link> 
        </div>
    )
}